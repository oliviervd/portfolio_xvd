import React, {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const Theater = lazy(() => import("./theater"));
const PortfolioList = lazy(() => import("./PortfolioList"));

const HighlightElement = (props) => {
  let vimeoID, youtubeID, title, year, type, techSpecs, images, _description;

  if (props.windowIsOpen) {
    if (props.detailDB[0].vimeo[0]["vimeoURI"]) {
      vimeoID = props.detailDB[0].vimeo[0]["vimeoURI"];
    }
    title = props.detailDB[0].title;
    year = props.detailDB[0].year;
    type = props.detailDB[0].type;
    techSpecs = props.detailDB[0].techSpecs;
    images = props.detailDB[0].images;
  }

  useEffect(() => {
    if (props.detailDB) {
      const section = document.querySelector("#about--description");
      if (section) {
        section.innerHTML = props.detailDB[0].description;
      }
    }
  }, [props.detailDB && props.detailDB[0] && props.detailDB[0].description]);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      {props.windowIsOpen && (
        <div className="project__container">
          <div className={"gridH-1-19"}>
            <div>
              <div className={"grid-9-1"}>
                <div className={"grid-3-4-3"}>
                  <div>
                    <p className={""}>{type}</p>
                  </div>
                  <h1
                    className={"upper project__title"}
                    style={{ color: "pink" }}
                  >
                    {title}
                  </h1>
                  <div>
                    <p>{year}</p>
                  </div>
                </div>
                <div className={"grid_even--3"}>
                  <div></div>
                  <p className={"link"} onClick={props.initGrid}>
                    ⤫close
                  </p>
                </div>
              </div>
              <div>
                <Suspense>
                  <Theater vimeo_id={vimeoID} youtube_id={youtubeID} />
                </Suspense>
                <div className={"lineBottom"}></div>
              </div>
            </div>
            <div className="project__split-view">
              <div id={"about--description"}></div>
              <section className={"image-gallery__container"}>
                {images.map((image) => (
                  <div className="image-gallery__image">
                    <img loading="lazy" src={image.image.url} />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HighlightElement;
