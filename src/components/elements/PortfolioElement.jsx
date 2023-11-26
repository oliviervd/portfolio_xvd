import React, { useLayoutEffect, useState } from "react";
import { fetchContentPayload } from "../utils/fetchData";
import VideoViewer from "./videoViewer";
import { makeBold } from "../utils/utils";

const PortfolioElement = (props) => {
  const [details, showDetails] = useState(false);

  let _projects, project;
  _projects = fetchContentPayload();
  if (_projects) {
    project = _projects["docs"];
  }

  console.log(project);

  return (
    <div>
      {project && (
        <div className="projects_container">
          {project.map((item) => {
            let description,
              title,
              gif,
              still,
              images,
              directed_by,
              vimeo_ids,
              vimeo_id,
              youtube_id,
              sort,
              kind,
              _img,
              type,
              id,
              year,
              techSpec,
              highlight;
            id = item.id; // id of the project (Database).
            if (item.heroImage) {
              gif = "https://" + item.heroImage.url;
            }
            title = item.projectTitle; // title of the project
            description =
              item.projectInformation.description[0].children[0].text;
            directed_by = item.projectInformation.directedBy.firstName;
            vimeo_id = item.mediaGroup.vimeoURI; // id to fetch vimeo video
            youtube_id = item.mediaGroup.youtubeURI; // id to fetch youtube video
            sort = props.kind; // feature, short, ...
            kind = item.projectInformation.projectCategory; //branded content or narrative content
            if (item.images) {
              still = item.images.url;
            }

            images = item.gallery;
            highlight = item.highlight;
            vimeo_ids = item.mediaGroup.vimeo;
            let detailDB = [];
            detailDB.push({
              highlight: highlight,
              gif: gif,
              images: images,
              vimeo: vimeo_ids,
              youtube: youtube_id,
              still: still,
              title: title,
              description: description,
              type: kind,
              year: year,
              techSpecs: techSpec,
            });

            function activateDetailViewer() {
              // function to set state of what will be shown in the detail viewer and which one to open.
              props.setShowWorkID(id);
              if (kind === "narrative-content") {
                props.setDetailNarrativeWindowOpen(true); // set detail pane open
                // props.setDetailBrandedWindowOpen(false); //todo: check maybe not used
                props.setHideBranded(true); // hide branded pane
                props.setHideNarrative(false); // hide narrative pane
                props.setDetailDB(detailDB); //populate temp db for detail pane
                showDetails(!details);
              } else if (kind === "branded-content") {
                props.setDetailNarrativeWindowOpen(true);
                props.setHideNarrative(true);
                props.setHideBranded(false);
                props.setDetailDB(detailDB);
                showDetails(!details);
              }
            }

            if (kind.trim() === sort.trim()) {
              // function to set UPPERCASE in bold when tag is p. -- used for credit list.

              return (
                <div
                  className={`project_container ${
                    highlight ? "" : "hideProject"
                  }`}
                >
                  {props.type && (
                    <div className={"grid-1-15-4"}>
                      <p className={"text-rotate upper typeBox"}>{type}</p>
                      <h1
                        onClick={activateDetailViewer}
                        className="accent upper"
                      >
                        {title}
                      </h1>
                      <p
                        onClick={activateDetailViewer}
                        className={"link accent"}
                      >
                        read more
                      </p>
                    </div>
                  )}
                  {!props.type && (
                    <div className={"grid-1-15-4"}>
                      <div />
                      <h1
                        onClick={activateDetailViewer}
                        className="accent upper"
                      >
                        {title}
                      </h1>

                      <p
                        onClick={activateDetailViewer}
                        className={"link accent"}
                      >
                        read more
                      </p>
                    </div>
                  )}
                  {/* 
                  <VideoViewer
                    still={still}
                    vimeo_id={vimeo_ids}
                    youtube_id={youtube_id}
                  />
 */}
                  <img className="image_fit" alt={""} src={gif} />

                  {/*if narrative content display like this*/}

                  {kind === "narrative content" && (
                    <p onClick={activateDetailViewer} className={"creditList"}>
                      {description}
                    </p>
                  )}

                  {/*if branded content display like this*/}

                  {kind === "branded content" && (
                    <p onClick={activateDetailViewer}>
                      directed by: {directed_by}
                    </p>
                  )}

                  <div
                    className={`project-details-mobile ${
                      details ? "active" : "hide"
                    }`}
                  >
                    <p>{description}</p>
                  </div>
                  <div className="blackbox"></div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default PortfolioElement;
