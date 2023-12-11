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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTheaterOpen, setIsTheaterOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);
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
                <div className={"project__title-container"}>
                  <div>
                    <div>
                      <div>
                        <p className={""}>{type}</p>
                      </div>
                      <div>
                        <p>{year}</p>
                      </div>
                    </div>
                    <h1
                      className={"upper project__title"}
                      style={{ color: "pink" }}
                    >
                      {title}
                    </h1>
                  </div>
                </div>

                <p className={"link close"} onClick={props.initGrid}>
                  ⤫close
                </p>
              </div>
              <div style={{ opacity: isModalOpen ? "0" : "100" }}>
                <Suspense>
                  <Theater vimeo_id={vimeoID} youtube_id={youtubeID} />
                </Suspense>
              </div>
            </div>
            <div className="project__split-view">
              <div id={"about--description"}></div>

              <ul id="image-gallery" className={"image-gallery__container"}>
                {images.map((image) => (
                  <li
                    className="image-gallery__image"
                    onClick={() => {
                      setIsModalOpen(true);
                      setCurrentImage(image.image.url);
                      setIsTheaterOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img loading="lazy" src={image.image.url} />
                  </li>
                ))}
              </ul>
            </div>
            <div
              id="image-gallery__modal"
              className="image-gallery__modal"
              style={{ display: isModalOpen ? "block" : "none" }}
            >
              <div className="image-gallery__modal-box">
                <img id="img01" src={currentImage} />
              </div>
              <div
                id="close"
                className="image-gallery__modal-close"
                onClick={() => {
                  setIsModalOpen(false);
                  setIsTheaterOpen(true);
                  document
                    .getElementById("image-gallery")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                X
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HighlightElement;
