import React from "react";
import VideoViewer from "./videoViewer";
import useGoogleSheets from "use-google-sheets";
import {fetchDescription, fetchDirectedBy, fetchProducedBy, fetchCinematographer, fetchArtDirection, fetchTags} from "../utils/db_parser";

const PortfolioGrid = (props) => {

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
            {_portfolio.map((item => {
                let sort;
                let kind;
                sort = props.kind;
                kind = item.kind;

                if (kind.trim() === sort.trim()) {

                    let description, directed_by, produced_by, cinematography, art_direction, tags
                    // description
                    description = fetchDescription(item);
                    directed_by = fetchDirectedBy(item);
                    produced_by = fetchProducedBy(item);
                    cinematography = fetchCinematographer(item);
                    art_direction = fetchArtDirection(item);
                    tags = fetchTags(item);

                    tags = tags.split(",");
                    const listTags = tags.map((tag)=>
                        <div className="tag">{tag}</div>
                    );

                    return(
                        <div className='grid-7-3 portfolio-container'>
                            <div className="video">
                                <VideoViewer scale="0.7" vimeo_id={item.vimeo}/>
                            </div>
                            <div>
                                <div className="portfolio-container_infobox">
                                    <h1>{item.title}</h1>
                                    {description}
                                    {directed_by}
                                    {produced_by}
                                    {cinematography}
                                    {art_direction}
                                </div>
                                <div className="tags">
                                    {listTags}
                                </div>
                            </div>

                        </div>
                    )
                }

            }))}
        </div>
    )
}
export default PortfolioGrid;