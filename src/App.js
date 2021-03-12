import logo from "./assets/logos/clio-logo.svg";
import map from "./assets/images/DT Vancouver Map.png"
import location from  "./assets/icons/akar-icons_location.png";
import rightArrow from "./assets/icons/chevron.svg";
import Header from "./components/Header";
import './App.css';
import TopBanner from "./components/TopBanner";
import BottomBanner from "./components/BottomBanner";
import Footer from "./components/Footer";
import MainNavBar from "./components/MainNavBar";


function App() {
  return (
    <div>
      <Header logo={logo}/>
      <TopBanner/>
      <MainNavBar/>

  <div className="testing">
    <div className="main-section">
      <div className="main-section__cards">
          <div className="main-section__left">
              <img className="main-section__pin" src={location} alt="location pin icon"/>
            <div className="main-section__grouptesting">
              <div className="main-section__groupInfo">
                <p className="main-section__title">RWE Family Law</p>
                <p className="main-section__text">Family law attorney</p>
                <p className="main-section__text">808 Nelson St #1700</p>
                <p className="main-section__text">(604)259-2425</p>
              </div>
              <img className="main-section__rightArrow" src={rightArrow} alt="chevron right icon"/>
            </div>
          </div>

          <div className="main-section__left">
              <img className="main-section__pin" src={location} alt="location pin icon"/>
            <div className="main-section__grouptesting">
              <div className="main-section__groupInfo">
                <p className="main-section__title">Harbour Family Law</p>
                <p className="main-section__text">Family law attorney</p>
                <p className="main-section__text">1275 W 6th Ave #300</p>
                <p className="main-section__text">(604)659-6462</p>
              </div>
              <img className="main-section__rightArrow" src={rightArrow} alt="chevron right icon"/>
            </div>
          </div>

          <div className="main-section__left">
              <img className="main-section__pin" src={location} alt="location pin icon"/>
            <div className="main-section__grouptesting">
              <div className="main-section__groupInfo">
                <p className="main-section__title">Westside Family Law</p>
                <p className="main-section__text">Family law attorney</p>
                <p className="main-section__text">1367 W Broadway #504</p>
                <p className="main-section__text">(604)734-7911</p>
              </div>
              <img className="main-section__rightArrow" src={rightArrow} alt="chevron right icon"/>
            </div>
          </div>

          <div className="main-section__left">
              <img className="main-section__pin" src={location} alt="location pin icon"/>
            <div className="main-section__grouptesting">
              <div className="main-section__groupInfo">
                <p className="main-section__title">Spectrum Family Law</p>
                <p className="main-section__text">Divorce lawyer</p>
                <p className="main-section__text">838 W Hastings St #717</p>
                <p className="main-section__text">(778)452-0221</p>
              </div>
              <img className="main-section__rightArrow" src={rightArrow} alt="chevron right icon"/>
            </div>
          </div>

          <div className="main-section__left">
              <img className="main-section__pin" src={location} alt="location pin icon"/>
            <div className="main-section__grouptesting">
              <div className="main-section__groupInfo">
                <p className="main-section__title">Harbour Family Law</p>
                <p className="main-section__text">Family law attorney</p>
                <p className="main-section__text">1275 W 6th Ave #300</p>
                <p className="main-section__text">(604)659-6462</p>
              </div>
              <img className="main-section__rightArrow" src={rightArrow} alt="chevron right icon"/>
            </div>
          </div>

      </div>
    </div>   
      <div className="main-section__right">
        <img className="main-section__map" src={map} alt="vancouver downtown map"/>
      </div>
</div>  
    
      <BottomBanner/>
      <Footer/>
    

    </div>
  );
}

export default App;
