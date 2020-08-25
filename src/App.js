import React from "react";
import "./App.css";
import GtLogo from "./GtLogo.svg";
import icon from "./Group 1.png";
import icon2 from "./red.png";
import icon3 from "./Group 23@2x.png";
function App() {
  return (
    <div className="App">
      <div class="container">
        <div className="row d-flex no=gutters" style={{ marginTop: "1%" }}>
          <div className="col-md-4" style={{ textAlign: "center" }}></div>
          <div
            className="col-10 pl-5 pl-md-0 col-md-4"
            style={{ textAlign: "center" }}
          >
            <p class="header" style={{}}>
              <b>Fintech & Innovation Division</b>
            </p>
            <p
              class="internal"
              style={{ fontSize: "0.9rem", fontWeight: "100" }}
            >
              Internal Server Dashboard
            </p>
          </div>
          <div className="col-2 col-md-4 d-flex justify-content-end">
            <img src={GtLogo} alt="gtlogo" class="gtlogo" />
          </div>
        </div>

        <div class="row d-flex justify-content-center mt-md-5">
          <div class="col-10 mt-3 mt-md-0 col-md-6 ">
            <div className="row">
              <div className="col-12">
                <div
                  class="card cards"
                  style={{ backgroundColor: "rgb(217,79,0)" }}
                >
                  <div class="card-body d-flex justify-content-between">
                    <span
                      class=""
                      style={{ fontSize: "2rem", textAlign: "left" }}
                    >
                      Hi Admin.
                      <p style={{ fontSize: "0.6rem", fontWeight: "100" }}>
                        Stay up-to-date with the state of our Internal Servers
                      </p>
                    </span>
                    <img src={icon} alt="icon" class="conImage" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-around">
              <div className="col-5">
                <img src={icon2} alt="icon2" class="circleStyle redStyle" />
              </div>
              <div className="col-5">
                <img src={icon3} alt="icon3" class="circleStyle greenStyle" />
              </div>
            </div>
          </div>
          <div
            class="col-10 mt-3 mt-md-0 col-md-6 d-flex align-items-stretch "
            style={{}}
          >
            <div
              class="card cards d-flex justify-content-center w-100"
              style={{}}
            >
              <div class="card-body">
                <h5 class="card-title">All Servers</h5>
                <div
                  className="col-12 col-md-12 table-responsive-md d-flex justify-content-between"
                  style={{
                    fontSize: "1rem",
                    borderRadius: "2px",
                    color: "white",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  <table className="table table-borderless mx-auto mt-1">
                    <thead>
                      <tr>
                        <td>
                          <button
                            className="btn btn-sm d-flex justify-content-between alitbtn align-items-center"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#14171a",
                              width: "100%",
                              color: "white",
                              fontWeight: "100",
                            }}
                          >
                            <span>Go Live Form(10.1.0.62)</span>
                            <span class="d-flex align-items-center">
                              <button class="botn3 mr-2"></button>
                              <button
                                class="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                Send Mail
                              </button>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td>
                          <button
                            className="btn btn-sm d-flex justify-content-between alitbtn"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#14171a",
                              width: "100%",
                              color: "white",
                              fontWeight: "100",
                            }}
                          >
                            <span>Surge & GT Community &nbsp;(10.1.0.62)</span>

                            <span class="d-flex align-items-center">
                              <button class="botn3 mr-2"></button>
                              <button
                                class="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                Send Mail
                              </button>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td>
                          <button
                            className="btn btn-sm d-flex justify-content-between alitbtn"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#14171a",
                              width: "100%",
                              color: "white",
                              fontWeight: "100",
                            }}
                          >
                            <span>Gateway Server &nbsp;(10.1.0.62)</span>
                            <span class="d-flex align-items-center">
                              <button class="botn3 mr-2"></button>
                              <button
                                class="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                Send Mail
                              </button>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td>
                          <button
                            className="btn btn-sm d-flex justify-content-between alitbtn"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#14171a",
                              width: "100%",
                              color: "white",
                              fontWeight: "100",
                            }}
                          >
                            <span>GT Assistant &nbsp;(10.1.0.62)</span>

                            <span class="d-flex align-items-center">
                              <button class="botn4 mr-2"></button>
                              <button
                                class="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                Send Mail
                              </button>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td>
                          <button
                            className="btn btn-sm d-flex justify-content-between alitbtn"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#14171a",
                              width: "100%",
                              color: "white",
                              fontWeight: "100",
                            }}
                          >
                            {" "}
                            <span> Type of Mail</span>
                            <span class="d-flex align-items-center">
                              <button class="botn4 mr-2"></button>
                              <button
                                class="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                Send Mail
                              </button>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
