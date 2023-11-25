import React, { useLayoutEffect } from "react";
import { fetchContentPayload } from "../utils/fetchData";
import VideoViewer from "./videoViewer";
import { makeBold } from "../utils/utils";

const PortfolioElement = (props) => {
  let _projects, project;
  _projects = fetchContentPayload();
  if (_projects) {
    project = _projects["docs"];
  }

  console.log(project);

  return (
    <div>
      {project && (
        <div>
          {project.map((item) => {
            let description,
              title,
              directed_by,
              vimeo_id,
              youtube_id,
              sort,
              kind,
              _img,
              type,
              id,
              year,
              techSpec;
            id = item.id; // id of the project (Database).
            title = item.projectTitle; // title of the project
            description =
              item.projectInformation.description[0].children[0].text;
            directed_by = item.projectInformation.directedBy.firstName;
            vimeo_id = item.mediaGroup.vimeoURI; // id to fetch vimeo video
            youtube_id = item.mediaGroup.youtubeURI; // id to fetch youtube video
            sort = props.kind; // feature, short, ...
            kind = item.projectInformation.projectCategory; //branded content or narrative content
            // add type
            // add image
            // add year
            // add techspecs
            //tempDB for detailed;
            let detailDB = [];
            detailDB.push({
              vimeo: vimeo_id,
              youtube: youtube_id,
              title: title,
              description: description,
              type: kind,
              year: year,
              techSpecs: techSpec,
            });

            console.log(detailDB);

            function activateDetailViewer() {
              // function to set state of what will be shown in the detail viewer and which one to open.
              props.setShowWorkID(id);
              if (kind === "narrative-content") {
                props.setDetailNarrativeWindowOpen(true); // set detail pane open
                // props.setDetailBrandedWindowOpen(false); //todo: check maybe not used
                props.setHideBranded(true); // hide branded pane
                props.setHideNarrative(false); // hide narrative pane
                props.setDetailDB(detailDB); //populate temp db for detail pane
              } else if (kind === "branded-content") {
                props.setDetailNarrativeWindowOpen(true);
                props.setHideNarrative(true);
                props.setHideBranded(false);
                props.setDetailDB(detailDB);
              }
            }

            if (kind.trim() === sort.trim()) {
              // function to set UPPERCASE in bold when tag is p. -- used for credit list.

              return (
                <div>
                  <div>
                    {props.type && (
                      <div className={"grid-1-15-4"}>
                        <p className={"text-rotate upper typeBox"}>{type}</p>
                        <div onClick={activateDetailViewer}>
                          <h1 className="accent upper">{title}</h1>
                        </div>
                        <div onClick={activateDetailViewer}>
                          <p className={"link accent"}>read more</p>
                        </div>
                      </div>
                    )}
                    {!props.type && (
                      <div className={"grid-1-15-4"}>
                        <div />
                        <div onClick={activateDetailViewer}>
                          <h1 className="accent upper">{title}</h1>
                        </div>
                        <div onClick={activateDetailViewer}>
                          <p className={"link accent"}>read more</p>
                        </div>
                      </div>
                    )}
                    <VideoViewer vimeo_id={vimeo_id} youtube_id={youtube_id} />
                    <img className="image_fit" alt={""} src={_img} />

                    {/*if narrative content display like this*/}

                    {kind === "narrative content" && (
                      <div onClick={activateDetailViewer}>
                        <p className={"creditList"}>{description}</p>
                      </div>
                    )}

                    {/*if branded content display like this*/}

                    {kind === "branded content" && (
                      <div onClick={activateDetailViewer}>
                        <p>directed by: {directed_by}</p>
                      </div>
                    )}
                    <div className="blackbox"></div>
                  </div>
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
