import React,{useState} from 'react'
export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const houdleNav = (index) => {
    if(index!==undefined) setCurrentIndex(index)
    setMenuVisible(!menuVisible)
    
  }
  const navitem = ['Home', 'DFT Standard', 'OrderSwap', 'NFT Gaga']
  return (
    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-10">
            <div className="top-left-row">
              <a href="/#Home" className="logo">DelandLabs</a>
              <div className={`nav-list ${menuVisible ? "show" : "close"}`}>
                <ul>
                  {
                    navitem.map((item, index) => {
                      return <li key={index} className={`nav-item ${index === currentIndex ? "current" : null}`}><a className="nav-item-link" href={`/#${item}`} onClick={() => { houdleNav(index) }}>{item}</a></li>
                    })
                  }
                </ul>
                <span onClick={() => { houdleNav() }} className={`${"btn-close"}`}><span></span></span>
                <p className="copyright">Copyright &copy; 2021 Deland-Labs All rights reserved.</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2 app-header-right">
            <div className="topbar-btn app-header-language">
              <span>EN</span>
            </div>
            <span onClick={() => { houdleNav() }} className={`${"topbar-btn hdBtn"}`}><span></span></span>
          </div>

        </div>
      </div>
    </header>
  )
}




