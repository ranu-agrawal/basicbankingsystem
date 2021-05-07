import React from 'react'

const Footer = () => {
  return (
      <div className="main-footer">
          <div className="container">
              
          </div>
          <div className="footer-bottom">
            <p className="text-xs-bottom" style={{textAlign: "center"}}>
              &copy;{ new Date().getFullYear()}. Made by <b>Ranu Agrawal</b><br/>
              GRIP TheSparksFoundation.
            </p>
        </div>   
      </div>
  )
}

export default Footer;