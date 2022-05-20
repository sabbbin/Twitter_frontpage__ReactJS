import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const handlesubmit = () => {};
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img
              src={process.env.PUBLIC_URL + "twitter.jpg"}
              id="tw-img"
              className="img-fluid"
            ></img>
          </div>

          <div className="col-5 offset-col-1 pt-5">
            <div>
              <div className="d-flex ">
                <FontAwesomeIcon
                  className="col-offset-4"
                  icon={faTwitter}
                  size="2x"
                  color="blue"
                />
                <div></div>
              </div>

              <h1 className="m-4" id='heading' > Happening now</h1>

              <h4 className="m-4" id='sub_heading' > Join Twitter today</h4>
              <div className="mb-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{
                    width: 260,
                   
                    borderRadius: 25,
                    borderWidth: 1,
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    color="blue"
                    icon={faGoogle}
                  ></FontAwesomeIcon>{" "}
                  Sign in with Google
                </button>
              </div>
              <div className="mb-2">
                <button
                type=' button'
                  className="mb-3 btn btn-outline-secondary"
                  style={{
                    width: 260,
                    borderRadius: 25,
                    
                    borderWidth: 1,
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faApple}></FontAwesomeIcon> Sign in
                  with Apple
                </button>
              </div>
              <div className="d-flex ">
                <hr style={{ width: 110 }} className=''></hr>
                <p> or </p>
                <hr style={{ width: 110 }} ></hr>
              </div>
            
              <div className="m-2">
                <button
                  type="button"
                  style={{ width: 260, borderRadius: 25, borderWidth: 1 }}
                  className=" btn btn-primary"
                >
                 Sign up with phone or email
                </button>
              </div>
              <div>
              <small class="form-text text-muted">
              By signing up, you agree to the <span><a href="#">
              Terms of Services</a> </span> and <span className="text-primary">
                <a>
                Privacy
                </a>
               </span>
                  , including <span className="text-primary">
                    <a>Cookie Use</a></span>

              </small>
           
              </div>
              <h6 className="mt-3">
                Already have Account ?{" "}
                              </h6>
                              <button  
                              type="button"
                              className="btn btn-outline-secondary "
                  style={{
                    width: 260,
               
                    borderRadius: 25,
                    borderWidth: 1,
                  }}>Sign In
                              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
