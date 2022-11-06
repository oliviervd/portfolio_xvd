import React from "react";
import VideoViewer from "./videoViewer";
import useGoogleSheets from "use-google-sheets";
import {fetchDescription, fetchDirectedBy, fetchProducedBy, fetchCinematographer, fetchArtDirection} from "./db_parser";


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
                console.log(item.vimeo);
                //todo: add statements to show only if value

                let description, directed_by, produced_by, cinematography, art_direction
                // description
                description = fetchDescription(item);
                directed_by = fetchDirectedBy(item);
                produced_by = fetchProducedBy(item);
                cinematography = fetchCinematographer(item);
                art_direction = fetchArtDirection(item);

                return(
                        <div className='grid-3-7'>
                            <div>
                                <VideoViewer vimeo_id={item.vimeo}/>
                            </div>
                            <div>
                                <div className="line">
                                    <h1>{item.title}</h1>
                                    {description}
                                    {directed_by}
                                    {produced_by}
                                    {cinematography}
                                    {art_direction}
                                </div>
                            </div>

                        </div>
                )
            }))}
        </div>
    )
}
export default PortfolioGrid;