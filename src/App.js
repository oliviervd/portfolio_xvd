import './App.css';
import PortfolioGrid from "./components/portfolioGrid";

function App() {

  return (
    <div>
        <div className="grid-3-7">
            <div className="H_margin-20p">
                <h1 className="upper">Xavier Van D'huynslager</h1>
                <p>
                    Xavier Van D'huynslager is a freelance Director of Photography based in Ghent, Belgium.
                    -Available for global hire.- www.xaviervandhuynslager.be +32 (0) 496 70 36 47
                </p>
            </div>
            <div>
            </div>
        </div>
        <div className="margin-20p">
            <div className="line"></div>
        </div>
        <div className="margin-20p">
        </div>

        <div className="grid-3-7">
            <div>
            </div>
            <div>
                <PortfolioGrid></PortfolioGrid>
            </div>
        </div>


    </div>
  );
}

export default App;
