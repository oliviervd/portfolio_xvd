import React, { useLayoutEffect } from "react";
import useGoogleSheets from "use-google-sheets";
import { fetchContentPayload } from "../utils/fetchData";
import {
  fetchImage,
  fetchVimeo,
  fetchDescription,
  fetchDirectedBy,
  fetchTitle,
  fetchID,
  fetchYear,
  fetchType,
  techSpecs,
} from "../utils/db_parser";
import FetchData from "../utils/fetchData";
import VideoViewer from "./videoViewer";
import { makeBold } from "../utils/utils";

const PortfolioElement = (props) => {
  // fetch data from google spreadsheet
  // todo: hide API key
  // todo: make local function in utils for this
  //
  const _projects = fetchContentPayload();
  console.log(_projects);

  const { data, loading, error } = useGoogleSheets({
    apiKey: "AIzaSyCqIBCTia_C6CvAAixtiost-E3hicp7nl4",
    sheetId: "1Npm-xqwwadyHybkXHUE7imeuh3PjsQn83Hdfaw0epc0",
    datasheetsOptions: [{ id: "Sheet1" }],
  });

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error!</p>
      </div>
    );
  }

  let _portfolio = [];
  data.map((x) => {
    x.data.map((l) => {
      _portfolio.push(l);
    });
  });

  makeBold();

  return (
    <div>
      {_portfolio.map((item) => {
        let description,
          title,
          directed_by,
          vimeo_id,
          sort,
          kind,
          _img,
          type,
          id,
          year,
          techSpec;
        id = fetchID(item); // id of the project (Database).
        title = fetchTitle(item); // title of the project
        description = fetchDescription(item); // description of the project
        directed_by = fetchDirectedBy(item);
        vimeo_id = fetchVimeo(item); // id to fetch vimeo video
        sort = props.kind; // feature, short, ...
        kind = item.kind; //branded content or narrative content
        _img = fetchImage(item);
        type = fetchType(item);
        year = fetchYear(item);
        techSpec = techSpecs(item);

        //tempDB for detailed;
        let detailDB = [];
        detailDB.push({
          vimeo: vimeo_id,
          title: title,
          description: description,
          type: type,
          year: year,
          techSpecs: techSpec,
        });

        function activateDetailViewer() {
          // function to set state of what will be shown in the detail viewer and which one to open.
          props.setShowWorkID(id);
          if (kind === "narrative content") {
            props.setDetailNarrativeWindowOpen(true); // set detail pane open
            // props.setDetailBrandedWindowOpen(false); //todo: check maybe not used
            props.setHideBranded(true); // hide branded pane
            props.setHideNarrative(false); // hide narrative pane
            props.setDetailDB(detailDB); //populate temp db for detail pane
          } else if (kind === "branded content") {
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
                <VideoViewer vimeo_id={vimeo_id} />
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
  );
};

export default PortfolioElement;

