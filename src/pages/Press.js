import React from 'react'
import "../assets/styles/press.scss";
import delandlabs3_512 from "../assets/images/press/delandlabs3_512.png";
import delandlabs3_b from "../assets/images/press/delandlabs3_b.png";
import delandlabs3_b_h from "../assets/images/press/delandlabs3_b_h.png";
import orderswap2_512 from "../assets/images/press/orderswap2_512.png";
import orderswap2_B from "../assets/images/press/orderswap2_B.png";
import orderswap2_B_h from "../assets/images/press/orderswap2_B_h.png";
import NFTGAGA_512 from "../assets/images/press/NFTGAGA_512.png";
import NFTGAGA_B_S from "../assets/images/press/NFTGAGA_B_S.png";
import NFTGAGA_B_H from "../assets/images/press/NFTGAGA_B_H.png";
import delandlabs from "../assets/images/press/pack/delandlabs.zip";
import orderSwap from "../assets/images/press/pack/orderswap.zip";
import nftgaga from "../assets/images/press/pack/nftgaga.zip";
import { Header } from "../components/Header";
import { Link } from 'react-router-dom'
export const Press = () => {
  return (
    
    <div className="press-wrap" id="press">
      <Header />
      <div className="container">
        <div className="line-light"></div>
        <div className="mybreadcrumb">
          <Link to="/">Home</Link>
          <span>Press kit</span>
        </div>

        <div className="press-content">
          <h1>Deland Labs</h1>
          <h2>The Deland Labs logo</h2>
          <div className="row">
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={delandlabs}>
                <div className="img-w"><img className="img-fluid" alt="Deland Labs Logo" src={delandlabs3_512} /></div>
                <div>
                  <strong>Deland labs logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={delandlabs}>
                <div className="img-w"><img className="img-fluid" alt="Deland Labs Logo" src={delandlabs3_b} /></div>
                <div>
                  <strong>Deland labs logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={delandlabs}>
                <div className="img-w"><img className="img-fluid" alt="Deland Labs Logo" src={delandlabs3_b_h} /></div>
                <div>
                  <strong>Deland labs logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="line-light"></div>

        <div className="press-content">
          <h1>OrderSwap</h1>
          <h2>The OrderSwap Logo</h2>
          <div className="row">
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={orderSwap}>
                <div className="img-w"><img className="img-fluid" alt="OrderSwap Logo" src={orderswap2_512} /></div>
                <div>
                  <strong>OrderSwap Logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={orderSwap}>
                <div className="img-w"><img className="img-fluid" alt="OrderSwap Logo" src={orderswap2_B} /></div>
                <div>
                  <strong>OrderSwap Logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={orderSwap}>
                <div className="img-w"><img className="img-fluid" alt="OrderSwap Logo" src={orderswap2_B_h} /></div>
                <div>
                  <strong>OrderSwap Logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="line-light"></div>

        <div className="press-content">
          <h1>NFT GaGa</h1>
          <h2>The NFT GaGa Logo</h2>
          <div className="row">
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={nftgaga}>
                <div className="img-w"><img className="img-fluid" alt="NFT GaGa Logo" src={NFTGAGA_512} /></div>
                <div>
                  <strong>NFT GaGa Logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={nftgaga}>
                <div className="img-w"><img className="img-fluid" alt="NFT GaGa Logo" src={NFTGAGA_B_S} /></div>
                <div>
                  <strong>NFT GaGa Logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="img-logo img-fluid" href={nftgaga}>
                <div className="img-w"><img className="img-fluid" alt="NFT GaGa Logo" src={NFTGAGA_B_H} /></div>
                <div>
                  <strong>NFT GaGa Logo</strong> <i className="icon icon-download"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
