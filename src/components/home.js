import React from 'react';
import "../assets/css/home.css";
import Logo from "../assets/image/logo.svg";
import Vig from "../assets/image/vig-detail.svg";
function Home() {
  return (
    <>
      <div className="home-page">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand text-center" href="/">
              <img src={Logo} alt="" className=" logo pt-2" />
            </a>

            <ul className="list-item pt-1">
              <li className="nav-item">
                <a href="#">PRODUCTS</a>
              </li>
              <li className="nav-item">
                <a href="#">MARKETS</a>
              </li>
              <li className="nav-item">
                <a href="/cap">CAPABILITIES</a>
              </li>
              <li className="nav-item">
                <a href="/about">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a href="/about">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="vigor-sec">
          <div className="row">
            <div className="col-lg-4">
              <h1 className="emp">EMPOWERING YOUR ENERGY FUTURE</h1>
              <h3 className="nex pt-2">Nexigo Battery Solutions</h3>
            </div>
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
              <h1 className="vig">VIGOR</h1>
              <img src={Vig} alt="detail" className="vig-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
