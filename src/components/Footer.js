import React from 'react'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="app-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              Copyright &copy; 2021 Deland-Labs All rights reserved.
            </div>
            <div className="col-md-6 social-media">
              <a href="https://twitter.com/DelandLabs" className="icon icon-twitter">Twitter</a>
              <a href="https://medium.com/@DelandLabs" className="icon icon-medium">Medium</a>
              <a href="https://github.com/Deland-Labs" className="icon icon-github">Github</a>
              <a href="https://discord.gg/CdzzUaFUXq" className="icon icon-discord">Discord</a>
              <span className="divider"></span>
              <Link to="/presskit#press" className="icon icon-press" title="press kit">press kit</Link>
            </div>
          </div>
        </div>
      </footer>
  )
}


