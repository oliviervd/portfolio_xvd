import React from "react"
import useGoogleSheets from "use-google-sheets";
import {fetchDescription, fetchID, fetchTitle, fetchType, fetchVimeo, fetchYear, techSpecs} from "../utils/db_parser";

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
                let _vimeo_id = fetchVimeo(item);
                let _description = fetchDescription(item);
                let _techSpec = techSpecs(item);

                let _detailDB = [];
                _detailDB.push({'vimeo': _vimeo_id, "title": _title,
                    "description": _description, "type": _type, "year": _year, "techSpecs": _techSpec})

                function activateDetailViewer() {
                    props.setShowWorkID(_id);
                    if (_kind === "narrative content") {
                        props.setDetailNarrativeWindowOpen(true);
                        props.setDetailDB(_detailDB);
                        props.setHideBranded(true);

                    }
                    if (_kind === "branded content") {
                        props.setDetailNarrativeWindowOpen(true)
                        props.setDetailDB(_detailDB);
                        props.setHideBranded(true);
                    }
                }

                let i = 0, ps = document.getElementsByTagName("p");
                let len
                for(len = ps.length; i<len; i++)
                {
                    let p = ps[i];
                    p.innerHTML = p.innerHTML.replace(/\b([A-Z]{2,})\b/g, "<b>$1</b>");
                }

                return(
                    <div className={"grid-9-1 lineBottom scroller"}>
                        <div className={"grid-3-4-3"}>
                            <p className={"smaller accent"}>{_type}</p>
                            <p className={"bolder"}>{_title}</p>
                            <p className={"smaller accent"}>{_year}</p>
                        </div>
                        <div>
                            <p className={"smaller accent link"} onClick={activateDetailViewer}>read more</p>
                        </div>
                    </div>
                    )
            })}

        </div>
    )
}
export default PortfolioList;