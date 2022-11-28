import React from "react";
import useGoogleSheets from "use-google-sheets";
import {fetchImage, fetchVimeo, fetchDescription, fetchDirectedBy, fetchTitle, fetchID} from "../utils/db_parser";
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
               let description, title, directed_by, vimeo_id, sort, kind, img;
               description = fetchDescription(item)
               title = fetchTitle(item);
               directed_by = fetchDirectedBy(item);
               vimeo_id = fetchVimeo(item);
               sort = props.kind;
               kind = item.kind;
               img = fetchImage(item)

               if (kind.trim() === sort.trim()) {
                   return(
                       <div>
                           <div>
                               <h1 className="accent upper">{title}</h1>
                               <VideoViewer vimeo_id={vimeo_id}/>
                               <img className="image_fit" src={img}/>
                               <p>{directed_by}</p>
                               <p>{description}</p>
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