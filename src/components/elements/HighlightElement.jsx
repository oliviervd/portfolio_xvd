import React, { lazy, Suspense, useLayoutEffect, useState } from "react";
import { makeBold } from "../utils/utils";

const Theater = lazy(() => import("./theater"));
const PortfolioList = lazy(() => import("./PortfolioList"));

const HighlightElement = (props) => {
  const [hideDescription, setHideDescription] = useState(false);

  let vimeoID, title, description, year, type, techSpecs, images;

  if (props.windowIsOpen) {
    if (props.detailDB[0].vimeo[0]["vimeoURI"]) {
      vimeoID = props.detailDB[0].vimeo[0]["vimeoURI"];
    }
    console.log(vimeoID);
    title = props.detailDB[0].title;
    description = props.detailDB[0].description;
    year = props.detailDB[0].year;
    type = props.detailDB[0].type;
    techSpecs = props.detailDB[0].techSpecs;
    images = props.detailDB[0].images;
  }

  return (
    <div>
      {!props.windowIsOpen && (
        <div>
          {/*
          <PortfolioList
            initGrid={props.initGrid}
            setShowWorkID={props.setShowWorkID}
            setDetailNarrativeWindowOpen={props.setDetailNarrativeWindowOpen}
            setDetailBrandedWindowOpen={props.setDetailBrandedWindowOpen}
            setHideBranded={props.setHideBranded}
            setDetailDB={props.setDetailDB}
          />
          */}
        </div>
      )}
      {props.windowIsOpen && (
        <div>
          <div className={"gridH-1-19"}>
            <div>
              <div className={"grid-9-1"}>
                <div className={"grid-3-4-3"}>
                  <div>
                    <p className={""}>{type}</p>
                  </div>
                  <h2 className={"upper"} style={{ color: "pink" }}>
                    {title}
                  </h2>
                  <div>
                    <p>{year}</p>
                  </div>
                </div>
                <div className={"grid_even--3"}>
                  <p
                    className={"link"}
                    onClick={() => setHideDescription(!hideDescription)}
                  >
                    ↧description
                  </p>
                  <div></div>
                  <p className={"link"} onClick={props.initGrid}>
                    ⤫close
                  </p>
                </div>
              </div>
              <div>
                {hideDescription && (
                  <div className={"grid-65-05-30"}>
                    <p>{description}</p>
                    <div></div>
                    <div>
                      <p className={"accent"}>tech specs: </p>
                      <p>{techSpecs}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <Suspense>
                <Theater vimeo_id={vimeoID} />
              </Suspense>
              <div className={"lineBottom"}></div>
            </div>
            <section className={"image-gallery__container"}>
              {images.map((image) => (
                <div className="image-gallery__image">
                  <img loading="lazy" src={"https://" + image.image.url} />
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default HighlightElement;
