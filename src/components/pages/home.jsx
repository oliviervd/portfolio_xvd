import React, { Suspense, lazy, useState, useEffect } from "react";
import { makeBold } from "../utils/utils";
import { useMediaQuery } from "react-responsive";
import { fetchContentPayload } from "../utils/fetchData";

const Header = lazy(() => import("../elements/header"));
const PortfolioElement = lazy(() => import("../elements/PortfolioElement"));
const HighlightElement = lazy(() => import("../elements/HighlightElement"));

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const [showWorkID, setShowWorkID] = useState("test");
  const [detailNarrativeWindowOpen, setDetailNarrativeWindowOpen] =
    useState(false);
  const [detailBrandedWindowOpen, setDetailBrandedWindowOpen] = useState(false);
  const [hideNarrative, setHideNarrative] = useState(false);
  const [hideBranded, setHideBranded] = useState(false);
  const [detailDB, setDetailDB] = useState("");

  // fetch data on projects from payload
  const _projects = fetchContentPayload();
  console.log(_projects);

  function initGrid() {
    setDetailBrandedWindowOpen(false);
    setDetailNarrativeWindowOpen(false);
    setHideNarrative(false);
    setHideBranded(false);
  }

  useEffect(makeBold);

  return (
    <div>
      {isTabletOrMobile && (
        <div>
          <Suspense>
            <Header
              showBio={false}
              hamburger={true}
              isDesktopOrLaptop={isDesktopOrLaptop}
              isTabletOrMobile={isTabletOrMobile}
            />
          </Suspense>{" "}
          <Suspense>
            <PortfolioElement
              type={true}
              className="PortfolioElement_narrative"
              kind={"narrative-content"}
              setShowWorkID={setShowWorkID}
              setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
              setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
              setDetailDB={setDetailDB}
              setHideNarrative={setHideNarrative}
              setHideBranded={setHideBranded}
            />
          </Suspense>
          <Suspense>
            <PortfolioElement
              type={true}
              className="PortfolioElement_branded"
              kind={"branded-content"}
              setShowWorkID={setShowWorkID}
              setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
              setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
              setDetailDB={setDetailDB}
              setHideNarrative={setHideNarrative}
              setHideBranded={setHideBranded}
            />
          </Suspense>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div className="full_page">
          <div
            className={
              detailNarrativeWindowOpen
                ? "grid-65-5-30 full_page"
                : "grid-30-5-30-5-30 full_page"
            }
          >
            {/* first column - highlights + header
                todo: add map function
                */}
            <div className="gridH-25-1-74" style={{ overflow: "hidden" }}>
              <div className={"lineBottom"}>
                <Suspense>
                  <Header
                    initGrid={initGrid}
                    showBio={true}
                    hamburger={false}
                    isDesktopOrLaptop={isDesktopOrLaptop}
                    isTabletOrMobile={isTabletOrMobile}
                  />
                </Suspense>
              </div>
              <br />
              <div
                className={
                  detailNarrativeWindowOpen
                    ? "lineBottom portfolio-item"
                    : "lineBottom lineTop scroller"
                }
              >
                {" "}
                {/*




                */}
                <Suspense>
                  <HighlightElement
                    setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                    setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                    windowIsOpen={detailNarrativeWindowOpen}
                    showWorkID={showWorkID}
                    detailDB={detailDB}
                    setDetailDB={setDetailDB}
                    initGrid={initGrid}
                    setShowWorkID={setShowWorkID}
                    setHideBranded={setHideBranded}
                    setHideNarrative={setHideNarrative}
                  />
                </Suspense>
              </div>
            </div>

            {!hideNarrative && (
              <div className="">
                <h2 className="text-rotate accent upper">narrative content</h2>
              </div>
            )}

            {!hideNarrative && (
              <div className={"scroller"}>
                <Suspense>
                  <PortfolioElement
                    type={true}
                    className="PortfolioElement_narrative"
                    kind={"narrative-content"}
                    setShowWorkID={setShowWorkID}
                    setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                    setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                    setDetailDB={setDetailDB}
                    setHideNarrative={setHideNarrative}
                    setHideBranded={setHideBranded}
                  />
                </Suspense>
              </div>
            )}

            {!hideBranded && (
              <div className="">
                <h2 className="text-rotate accent upper">branded content</h2>
              </div>
            )}

            {/* third column - branded
                todo: add map function
                */}

            {!hideBranded && (
              <div className={"scroller"}>
                <Suspense>
                  <PortfolioElement
                    type={true}
                    className="PortfolioElement_branded"
                    kind={"branded-content"}
                    setShowWorkID={setShowWorkID}
                    setDetailBrandedWindowOpen={setDetailBrandedWindowOpen}
                    setDetailNarrativeWindowOpen={setDetailNarrativeWindowOpen}
                    setDetailDB={setDetailDB}
                    setHideNarrative={setHideNarrative}
                    setHideBranded={setHideBranded}
                  />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
