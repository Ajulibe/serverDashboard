import React, { useState } from "react";
import "./App.css";
import GtLogo from "./GtLogo.svg";
import icon from "./Group 1.png";
import icon2 from "./red.png";
import icon3 from "./Group 23@2x.png";
import io from "socket.io-client";

function App() {
  //one color for each server
  const [color, setColor] = useState("botn5");
  const [working, setWorking] = useState(0);
  const [down, setDown] = useState(0);
  const [botOnState, setBotOnState] = useState(false);
  const [botDownState, setBotDownState] = useState(false);

  const Botify = io("https://shopwyse-backend.herokuapp.com");

  //CONNECTED
  Botify.on("connect", function () {
    // console.log("connected");
    setColor("botn4");
    if (!botOnState) {
      setBotOnState(true);
      setBotDownState(false);
      setWorking(working + 1);
      document.getElementById("greenID").classList.add("greenStyle");
      document.getElementById("redID").classList.remove("redStyle");
      if (down === 0) {
        return null;
      } else {
        setDown(down - 1);
      }
    } else {
      return null;
    }
  });

  //DISCONNECTED
  Botify.on("disconnect", function () {
    // console.log("disconnected");
    setColor("botn3");
    if (!botDownState) {
      setBotDownState(true);
      setBotOnState(false);
      setDown(down + 1);
      document.getElementById("redID").classList.add("redStyle");
      document.getElementById("greenID").classList.remove("greenStyle");
      if (working === 0) {
        return null;
      } else {
        setWorking(working - 1);
      }
    } else {
      return null;
    }
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex no=gutters" style={{ marginTop: "1%" }}>
          <div className="col-md-4" style={{ textAlign: "center" }}></div>
          <div
            className="col-10 pl-5 pl-md-0 col-md-4"
            style={{ textAlign: "center" }}
          >
            <p className="header" style={{}}>
              <b>Fintech & Innovation Division</b>
            </p>
            <p
              className="internal"
              style={{ fontSize: "0.9rem", fontWeight: "100" }}
            >
              Internal Server Dashboard
            </p>
          </div>
          <div className="col-2 col-md-4 d-flex justify-content-end">
            <img src={GtLogo} alt="gtlogo" className="gtlogo" />
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-md-5 changedr">
          <div className="col-10 mt-3 mt-md-0 col-md-6 ">
            <div className="row">
              <div className="col-12">
                <div className="card cards mainAdmin">
                  <div className="card-body d-flex justify-content-between">
                    <span
                      className="adminStyle"
                      style={{ fontSize: "2rem", textAlign: "left" }}
                    >
                      Hi Admin.
                      <p
                        style={{ fontSize: "0.6rem", fontWeight: "100" }}
                        className="stayup"
                      >
                        Stay up-to-date with the state of our Internal Servers
                      </p>
                    </span>
                    <img src={icon} alt="icon" className="conImage" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-around">
              <div className="col-5">
                <h2 className="transNum">{down}</h2>
                <img
                  id="redID"
                  src={icon2}
                  alt="icon2"
                  className="circleStyle"
                  style={{ position: "relative" }}
                />
              </div>
              <div className="col-5">
                <h2 className="transNum2">{working}</h2>
                <img
                  id="greenID"
                  src={icon3}
                  alt="icon3"
                  className="circleStyle"
                />
              </div>
            </div>
          </div>
          <div
            className="col-10 mt-3 mt-md-0 col-md-6 d-flex align-items-stretch "
            style={{}}
          >
            <div
              className="card cardsBlack d-flex justify-content-center w-100"
              style={{}}
            >
              <div className="card-body">
                <h5 className="card-title allservers">All Servers</h5>
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
                            <span style={{ textAlign: "left" }}>
                              Go Live Form{" "}
                              <span className="ipadd">(10.1.0.62)</span>
                            </span>
                            <span className="d-flex align-items-center">
                              <button
                                className={color}
                                style={{ marginRight: "0.7rem" }}
                              ></button>
                              <button
                                className="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                <span className="sendadd">Send</span> Mail
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
                            <span style={{ textAlign: "left" }}>
                              Surge
                              <span className="ipadd">(10.1.0.62)</span>
                            </span>

                            <span className="d-flex align-items-center">
                              <button
                                className={color}
                                style={{ marginRight: "0.7rem" }}
                              ></button>
                              <button
                                className="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                <span className="sendadd">Send</span> Mail
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
                            <span style={{ textAlign: "left" }}>
                              Gateway Server{" "}
                              <span className="ipadd">(10.1.0.62)</span>
                            </span>
                            <span className="d-flex align-items-center">
                              <button
                                className={color}
                                style={{ marginRight: "0.7rem" }}
                              ></button>
                              <button
                                className="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                <span className="sendadd">Send</span> Mail
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
                            <span style={{ textAlign: "left" }}>
                              GT Assistant{" "}
                              <span className="ipadd">(10.1.0.62)</span>
                            </span>

                            <span className="d-flex align-items-center">
                              <button
                                className={color}
                                style={{ marginRight: "0.7rem" }}
                              ></button>
                              <button
                                className="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                <span className="sendadd">Send</span> Mail
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
                            className="btn btn-sm d-flex justify-content-between alitbtn lastone"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#14171a",
                              width: "100%",
                              color: "white",
                              fontWeight: "100",
                            }}
                          >
                            <span style={{ textAlign: "left" }}>
                              GT Community{" "}
                              <span className="ipadd">(10.1.0.62)</span>
                            </span>
                            <span className="d-flex align-items-center">
                              <button
                                className={color}
                                style={{ marginRight: "0.7rem" }}
                              ></button>
                              <button
                                className="botn"
                                style={{
                                  fontWeight: "100",
                                }}
                              >
                                <span className="sendadd">Send</span> Mail
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
