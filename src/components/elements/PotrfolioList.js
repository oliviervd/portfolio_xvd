import React from "react"
import useGoogleSheets from "use-google-sheets";
import {fetchID, fetchTitle, fetchType, fetchYear} from "../utils/db_parser";

const PortfolioList = (props) => {

    const {data, loading, error } = useGoogleSheets({
        apiKey: "AIzaSyCqIBCTia_C6CvAAixtiost-E3hicp7nl4",
        sheetId: "1Npm-xqwwadyHybkXHUE7imeuh3PjsQn83Hdfaw0epc0",
        datasheetsOptions: [{ id: 'Sheet1' }],
    });

    if (loading) {
        return <div><p>Loading...</p></div>
    }

    if (error) {
        return <div><p>Error!</p></div>
    }

    let _portfolio = [];
    data.map((x)=>{
        x.data.map((l)=>{
            _portfolio.push(l);
        })
    })

    return(
        <div>
            {_portfolio.map((item)=>{
                let _title = fetchTitle(item);
                let _year = fetchYear(item);
                let _type = fetchType(item);
                let _id = fetchID(item)
                let _kind = item.kind;

                function activateDetailViewer() {
                    props.setShowWorkID(_id);
                    if (_kind === "narrative content") {
                        props.setDetailNarrativeWindowOpen(true);
                        props.setDetailBrandedWindowOpen(false);
                        props.setHideBranded(true)
                        props.setHideNarrative(false)
                    }
                    if (_kind === "branded content") {
                        props.setDetailNarrativeWindowOpen(false)
                        props.setDetailBrandedWindowOpen(true);
                        props.setHideBranded(false)
                        props.setHideNarrative(true)
                    }
                }

                return(
                    <div className={"grid-9-1 lineBottom scroller"}>
                        <div className={"grid-3-4-3"}>
                            <p>{_type}</p>
                            <p>{_title}</p>
                            <p>{_year}</p>
                        </div>
                        <div>
                            <p onClick={activateDetailViewer}>read more</p>
                        </div>
                    </div>
                    )
            })}

        </div>
    )
}
export default PortfolioList;