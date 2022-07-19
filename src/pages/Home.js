import React from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Home = () => {
  const notify = () =>{

    toast("coming soon",{
      position: "top-center",
      autoClose: 2000,
    });
  }   
  return (
    <div className="App">
      <Header />
      <div className="panel panel-1" id="Home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 panel-text">
              <h1>Deland Labs Make DEFI easier</h1>
              {/* <p>You can Make DEFI easyer and Bring many active users for your project</p> */}
              <div className="panel-button-wrap">
                {/* <a href="/#" className="panel-button">learn more</a> */}
              </div>
            </div>
            <div className="col-md-6 panel-img">
              <div className="mg mg1"></div>
              <div className="mg mg2"></div>
              <div className="mg mg3"></div>
              <div className="mg mg4"></div>
              <div className="mg mg5"></div>
              <span className="pot pot1"></span>
              <span className="pot pot2"></span>
              <span className="pot pot3"></span>
              <span className="pot pot4"></span>
              <span className="pot pot5"></span>
              <span className="pot pot6"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel panel-2" id="DFT Standard">
        <div className="container">
          <div className="row">
            <div className="col-md-6 panel-text">
              <h1>DFT Standard</h1>
              <p>Dfinity Fungible Token Standard</p>
            </div>
            <div className="col-md-6 panel-img">
              <div className="person"></div>
            </div>
          </div>
          <div className="row">
            <a href="https://github.com/Deland-Labs/dfinity-fungible-token-standard" className="link-button"><span className="icon icon-1"></span>Source Code</a>
            <a href="###" onClick={()=>{notify()}} className="link-button"><span className="icon icon-2"></span>Issuance Tool</a>
            <a href="https://dft.delandlabs.com/" className="link-button"><span className="icon icon-3"></span>Document</a>
            
          </div>
         
        </div>
      </div>
      
      <div className="panel panel-3" id="OrderSwap">
        <div className="container">
          <div className="container-inner">
            <div className="panel-text text-center">
              <h1>EX3 Orderswap</h1>
              <p>Open Order Procotol with AMM inside</p>
            </div>
            <div className="row panel-img">
              <div className="col-md-4 text-center">
                <div className="swap-img avatar1"></div>
                <strong>Easy To Use</strong>
              </div>
              <div className="col-md-4 text-center">
                <div className="swap-img avatar2"></div>
                <strong>HIGH-PERFORMANCE</strong>
              </div>
              <div className="col-md-4 text-center">
                <div className="swap-img avatar3"></div>
                <strong>SECURITY</strong>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="panel panel-4" id="NFT GaGa">
        <div className="container">
          <div className="row">
            <div className="col-md-12 panel-text text-center">
              <h1>NFT GaGa</h1>
              <p>Create  NFT badge with one-click</p>
            </div>
            <div className="col-md-6 text-center">
              <div className="gaga-img airdrop"></div>
              <strong>AirDrop Tool</strong>
            </div>
            <div className="col-md-6 text-center">
              <div className="gaga-img entrepot"></div>
              <strong>Support trading at Entrepot</strong>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <Footer />
    </div>
  );
}