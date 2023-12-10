import React, {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { makeBold } from "../utils/utils";
import { serialize } from "../utils/serialize";

const Theater = lazy(() => import("./theater"));
const PortfolioList = lazy(() => import("./PortfolioList"));

const HighlightElement = (props) => {
  let vimeoID, title, year, type, techSpecs, images, _description;

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
    <div>
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
                  <div></div>
                  <p className={"link"} onClick={props.initGrid}>
                    ⤫close
                  </p>
                </div>
              </div>
              <div>
                <div id={"about--description"}></div>
              </div>
            </div>
            <div style={{ margin: "20px" }}>
              <Suspense>
                <Theater vimeo_id={vimeoID} />
              </Suspense>
              <div className={"lineBottom"}></div>
            </div>
            <section className={"image-gallery__container"}>
              {images.map((image) => (
                <div className="image-gallery__image">
                  <img loading="lazy" src={image.image.url} />
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
