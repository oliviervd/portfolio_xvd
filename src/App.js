import './App.css';
import PortfolioGrid from "./components/elements/portfolioGrid";
import Theater from "./components/elements/theater";

function App() {

    return (
        <div>
            <div>
                <div className="grid-3-7">
                    <div className="H_margin-20p">
                        <h1 className="upper">Xavier Van D'huynslager</h1>
                        <p>
                            Xavier Van D'huynslager is a freelance Director of Photography based in Ghent, Belgium.
                            -Available for global hire.- www.xaviervandhuynslager.be +32 (0) 496 70 36 47
                        </p>
                    </div>

                </div>

                <div className="line"/>
                <div className="line"/>

                <Theater vimeo_id="668564452"/>
            </div>



        </div>
    );
}

export default App;
