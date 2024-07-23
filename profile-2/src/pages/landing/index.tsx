import "./landing.scss";
import Header from "../../components/header";

function Landing() {
  return (
    <div className="main">
      <div className="Headers">
        <Header />
      </div>
      <div className="main__container">
        <div className="banner">
          <div className="banner-item">Welcome to our website!</div>
          <div className="banner-item">Check out our latest updates!</div>
          <div className="banner-item">Contact us for more information!</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

