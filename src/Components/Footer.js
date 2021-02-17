import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
function Footer() {
    return (
        <div>
        <footer className="page-footer font-small blue-grey lighten-5">
        
          <div style={{backgroundColor: '#21d192'}}>
            <div className="container" >
        
              <div className="row py-4 d-flex align-items-center">
        
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0">Get connected with us on social networks!</h6>
                </div>
        
                <div className="col-md-6 col-lg-7 text-center text-md-right">
                  <a >
                  <AiFillFacebook size='2rem'/>
                  </a>
                  <a>
                    <AiFillInstagram size='2rem'/>
                  </a>
                  <a >
                    <AiFillTwitterCircle size='2rem'/>
                  </a>
                  
                </div>
        
              </div>
        
            </div>
          </div>
        
          <div className="container text-center text-md-left mt-5"  >
        
            <div className="row mt-3 dark-grey-text">
        
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
        
                <h6 className="text-uppercase font-weight-bold">ADMIN PAGE</h6>
                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                <p>In admin application</p>
        
              </div>
        
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase font-weight-bold">Location</h6>
                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                <p>
                  <b>Mumbai </b>
                </p>
                <p>
                  <b>Pune</b>
                </p>
        
              </div>
        
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                <p>
                  <i className="fas fa-home mr-3"></i> Pune, Maharashtra 10012, In</p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +91 8888065275</p>
        
              </div>
        
            </div>
        
          </div>
        
          <div className="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
          </div>
        
        </footer>
        </div>
    )
}
export default Footer
