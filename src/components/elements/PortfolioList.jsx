import React from "react";
import { fetchContentPayload } from "../utils/fetchData";

const PortfolioList = (props) => {
  let _projects, project;
  _projects = fetchContentPayload();
  if (_projects) {
    project = _projects["docs"];
  }

  return (
    <div>
      {project && (
        <div>
          {project.map((item) => {
            let description,
              title,
              directed_by,
              vimeo_id,
              still,
              sort,
              kind,
              id,
              year,
              techSpec;
            id = item.id; // id of the project (Database).
            title = item.projectTitle; // title of the project
            description =
              item.projectInformation.description[0].children[0].text;
            directed_by = item.projectInformation.directedBy.firstName;
            vimeo_id = item.mediaGroup.vimeoURI; // id to fetch vimeo video
            sort = props.kind; // feature, short, ...
            kind = item.projectInformation.projectCategory; //branded content or narrative content
            // add type
            if (item.images) {
              still = item.images.url;
            }
            console.log(still);
            // add year
            // add techspecs
            //tempDB for detailed;
            let detailDB = [];
            detailDB.push({
              still: still,
              vimeo: vimeo_id,
              title: title,
              description: description,
              type: kind,
              year: year,
              techSpecs: techSpec,
            });

            function activateDetailViewer() {
              props.setShowWorkID(_id);
              if (kind === "narrative-content") {
                props.setDetailNarrativeWindowOpen(true);
                props.setDetailDB(_detailDB);
                props.setHideBranded(true);
              }
              if (kind === "branded-content") {
                props.setDetailNarrativeWindowOpen(true);
                props.setDetailDB(_detailDB);
                props.setHideBranded(true);
              }
            }

            let i = 0,
              ps = document.getElementsByTagName("p");
            let len;
            for (len = ps.length; i < len; i++) {
              let p = ps[i];
              p.innerHTML = p.innerHTML.replace(
                /\b([A-Z]{2,})\b/g,
                "<b>$1</b>",
              );
            }

            return (
              <div className={"grid-9-1 lineBottom scroller"}>
                <div className={"grid-3-4-3"}>
                  <p className={"smaller accent"}>{kind}</p>
                  <p className={"bolder"}>{title}</p>
                  <p className={"smaller accent"}>{year}</p>
                </div>
                <div>
                  <p
                    className={"smaller accent link"}
                    onClick={activateDetailViewer}
                  >
                    read more
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default PortfolioList;
