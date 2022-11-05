import React from "react";
import VideoViewer from "./videoViewer";
import useGoogleSheets from "use-google-sheets";

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
                //todo: add if statements to show only if value
                return(
                        <div>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>directed by: {item.directed_by}</p>
                                <p>produced by: {item.produced_by}</p>
                                <p>cinematography: {item.cinematographer}</p>
                                <p>art direction: {item.art_direction}</p>
                                <VideoViewer vimeo_id={item.vimeo}/>
                            </div>
                            <div>
                            </div>
                        </div>
                )
            }))}
        </div>
    )
}
export default PortfolioGrid;