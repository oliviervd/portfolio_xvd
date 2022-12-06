import React, {} from "react";
import useGoogleSheets from "use-google-sheets";
import {
    fetchImage,
    fetchVimeo,
    fetchDescription,
    fetchDirectedBy,
    fetchTitle,
    fetchID,
    fetchYear,
    fetchType
} from "../utils/db_parser";
import VideoViewer from "./videoViewer";

const PortfolioElement = (props) => {

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

    let i = 0, ps = document.getElementsByTagName("p");
    let len
    for(len = ps.length; i<len; i++)
    {
        let p = ps[i];
        p.innerHTML = p.innerHTML.replace(/\b([A-Z]{2,})\b/g, "<b>$1</b>");
    }

    return (
       <div>
           {_portfolio.map((item => {
               let description, title, directed_by, vimeo_id, sort, kind, _img, type, id, year;
               id = fetchID(item); // id of the project (Database).
               title = fetchTitle(item); // title of the project
               description = fetchDescription(item) // description of the project
               directed_by = fetchDirectedBy(item);
               vimeo_id = fetchVimeo(item); // id to fetch vimeo video
               sort = props.kind; // feauture, short, ...
               kind = item.kind; //branded content or narrative content
               _img = fetchImage(item)
               type = fetchType(item)
               year = fetchYear(item)

               //tempDB for detailed;
               let detailDB = [];
               detailDB.push({'vimeo': vimeo_id, "title": title,
                   "description": description, "type": type, "year": year})

               function activateDetailViewer() {
                   // function to set state of what will be shown in the detail viewer and which one to open.
                   props.setShowWorkID(id);
                   if (kind === "narrative content") {
                       props.setDetailNarrativeWindowOpen(true);
                       props.setDetailBrandedWindowOpen(false);
                       props.setHideBranded(true);
                       props.setHideNarrative(false);
                       props.setDetailDB(detailDB);
                   }
                   else if (kind === "branded content") {
                       props.setDetailNarrativeWindowOpen(true);
                       props.setHideNarrative(true);
                       props.setHideBranded(false);
                       props.setDetailDB(detailDB);
                   }
               }

               if (kind.trim() === sort.trim()) {
                   return(
                       <div>
                           <div>
                               {props.type &&
                                   <div className={"grid-1-15-4"}>
                                       <p  className={"text-rotate upper typeBox"}>{type}</p>
                                       <div onClick={activateDetailViewer}>
                                           <h1 className="accent upper">{title}</h1>
                                       </div>
                                       <div onClick={activateDetailViewer}>
                                           <p className={"link"}>read more</p>
                                       </div>
                                   </div>
                               }
                               {!props.type &&
                                   <div className={"grid-1-15-4"}>
                                       <div/>
                                       <div onClick={activateDetailViewer}>
                                           <h1 className="accent upper">{title}</h1>
                                       </div>
                                       <div onClick={activateDetailViewer}>
                                           <p className={"link"}>read more</p>
                                       </div>
                                   </div>
                               }
                               <VideoViewer vimeo_id={vimeo_id}/>
                               <img className="image_fit" alt={""} src={_img}/>

                               {/*if narrative content display like this*/}

                               { (kind==="narrative content") &&
                                   <div onClick={activateDetailViewer}>
                                        <p>{description}</p>
                                   </div>
                               }

                               {/*if branded content display like this*/}

                               { (kind==="branded content") &&
                                   <div onClick={activateDetailViewer}>
                                       <p>directed by: {directed_by}</p>
                                   </div>
                               }
                               <div className="blackbox"></div>
                           </div>
                       </div>


                   )
               }

           }))}
       </div>
    )


}

export default PortfolioElement