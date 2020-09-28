import React, { useState, useRef } from "react";
import axios from "axios";
import icon from "./icon.svg";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Logs = () => {
  const [months, setMonths] = useState("");
  const [year, setYear] = useState("");
  const [info, setInfo] = useState({
    Surge: 10,
    GTAssistant: 10,
    GTCommunity: 10,
    Livewrapper: 10,
    Testwrapper: 10,
  });
  const [content, setContent] = useState("");

  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const addBtn = useRef();
  const firstBtn = useRef();
  const secondBtn = useRef();

  //CHART INFO
  const data = [
    {
      name: "Surge",
      Surge: info.Surge,
    },
    {
      name: "GTAssistant",
      GTAssistant: info.GTAssistant,
    },
    {
      name: "GTCommunity",
      GTCommunity: info.GTCommunity,
    },
    {
      name: "Livewrapper",
      Livewrapper: info.Livewrapper,
    },
    {
      name: "Testwrapper",
      Testwrapper: info.Testwrapper,
    },
  ];

  //SETTING MONTHS
  const optionsMonthsChange = (event) => {
    event.stopPropagation();
    let value = event.target.value;
    //setting the new state
    setMonths(value);
  };

  //SETTING YEAR
  const optionsYearChange = (event) => {
    event.stopPropagation();
    let value = event.target.value;
    //setting the new state
    setYear(value);
  };

  let btnState = months === "" || year === "" ? true : false;

  const fetchAnalysis = async () => {
    setShowDiv(false);
    setLoading(true);
    setEmpty(false);
    console.log(months, year);

    try {
      const response = await axios.post(
        "https://auto-response-mail-backend.herokuapp.com/analytics",
        {
          month: months,
          year: year,
        }
      );
      if (response.data.message === "No data for this month and year") {
        setLoading(false);
        setEmpty(true);
      }

      console.log(response.data);
      const Servers = response.data.serverDownCount;
      const mainData = response.data.mainData;
      const row = mainData.map((data) => {
        return (
          <tr key={data._id}>
            <td
              style={{
                fontSize: "0.6rem",
              }}
            >
              {data.serverName}
            </td>
            <td
              style={{
                fontSize: "0.6rem",
              }}
            >
              {data.date}
            </td>
            <td
              style={{
                fontSize: "0.6rem",
              }}
            >
              {data.time}
            </td>
          </tr>
        );
      });

      setContent(row);
      setInfo({
        Surge: Servers.Surge ? Servers.Surge : "0",
        GTAssistant: Servers.GTAssistant ? Servers.GTAssistant : "0",
        GTCommunity: Servers.GTCommunity ? Servers.GTCommunity : "0",
        Livewrapper: Servers.Livewrapper ? Servers.Livewrapper : "0",
        Testwrapper: Servers.Testwrapper ? Servers.Testwrapper : "0",
      });

      setLoading(false);
      setShowDiv(true);
      setMonths("");
      setYear("");
    } catch (error) {
      setEmpty(true);
    }
  };

  const addClassFn = () => {
    console.log("clicked!!");
    const element = addBtn.current;
    const btn1 = firstBtn.current;
    const btn2 = secondBtn.current;
    element.classList.toggle("showMe");
    btn1.classList.toggle("showMe");
    btn2.classList.toggle("showMe");
  };

  return (
    <div className="container divMan">
      <div
        className="row d-flex align-items-center justify-content-center text-center"
        style={{
          marginTop: "5%",
        }}
      >
        <div
          className="col-md-7 col-10"
          style={{
            backgroundColor: "#1D2022",
            border: "0.3px solid rgb(255, 117, 37)",
            // border: "0.3px solid rgb(224, 248, 11)",
            padding: "0.6rem",
            // boxShadow: "0px 0px 6px 3px rgba(0, 0, 0, 0.3)",
            // borderRadius: "3px",
          }}
        >
          <div className="col-md-12 col-12 mb-1">
            <select
              className="form-control form-control-sm"
              style={{
                borderRadius: "0",
                border: "none",
                backgroundColor: "#14171A",
                color: "white",
                fontSize: "0.7rem",
              }}
              value={months}
              onChange={optionsMonthsChange}
            >
              <option defaultValue>Select Month --</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="col-md-12 col-12 ">
            <select
              className="form-control form-control-sm"
              style={{
                // border: "1px solid rgb(255, 117, 37)",
                border: "none",
                borderRadius: "0",
                backgroundColor: "#14171A",
                color: "white",
                fontSize: "0.7rem",
              }}
              value={year}
              onChange={optionsYearChange}
            >
              <option defaultValue>Select Year --</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </div>
      {/* BUTTON */}
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{}}
      >
        <div
          className="col-3 text-center mt-3"
          style={{
            fontWeight: "100",
          }}
        >
          <button
            className="botnAny "
            disabled={btnState}
            style={{
              fontWeight: "100",
              //   border: "1px solid white",
            }}
            onClick={fetchAnalysis}
          >
            <span className="search">
              Search &nbsp;{" "}
              <i className="fa fa-search hideSearch" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      {/* LOADING SPINNER */}
      {loading ? (
        <div
          className="row d-flex justify-content-center align-items-center mt-md-3"
          style={{
            paddingTop: "1rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingBottom: "2rem",
          }}
        >
          <div className="col-12 col-md-8  d-flex justify-content-center spinner">
            <div className="sweet-loading">
              <PuffLoader
                css={override}
                size={80}
                color={"#E65C0F"}
                loading={loading}
              />
            </div>
          </div>
        </div>
      ) : null}
      {showDiv ? (
        <div className="row d-flex align-items-center justify-content-center mt-3">
          <div
            className="col-md-7 col-10 d-flex align-items-center justify-content-center text-center"
            style={{
              border: "1px solid rgba(225, 0, 0, 0.8)",
            }}
          >
            <div className="row d-flex align-items-center justify-content-center mt-3">
              <div className="col-md-12 col-12 d-flex align-items-center justify-content-center text-center">
                <span className="heading">
                  GRAPH SHOWING THE TOTAL NUMBER OF TIMES A SERVER HAS GONE DOWN
                </span>
              </div>

              <div
                className="col-md-12 col-12 d-flex align-items-center justify-content-center p-auto"
                style={{
                  height: "20rem",
                }}
              >
                <ResponsiveContainer width="90%" height="80%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 0,
                      bottom: 30,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />

                    <YAxis
                      label={{
                        value: "Number of Times Down",
                        angle: -90,
                        position: "insideBottomLeft",
                        fill: "white",
                        fontSize: 10,
                        offset: 16,
                      }}
                    />
                    <Tooltip />
                    <Legend
                      verticalAlign="bottom"
                      height={5}
                      iconSize={6}
                      iconType="circle"
                    />
                    <Bar dataKey="Surge" fill="#05BADD" fontSize="10" />

                    <Bar dataKey="GTAssistant" fill="#FF3902" />

                    <Bar dataKey="GTCommunity" fill="rgb(251, 255, 0)" />

                    <Bar dataKey="Testwrapper" fill="#2B4871" />
                    <Bar dataKey="Livewrapper" fill="#FFB404" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col-8 text-center mt-3">
            <button
              ref={firstBtn}
              className="botnAny"
              style={{
                fontWeight: "100",
                //   border: "1px solid white",
              }}
              onClick={addClassFn}
            >
              <span>Show Details</span>
            </button>
            <button
              ref={secondBtn}
              className="botnAny showMe"
              style={{
                fontWeight: "100",
              }}
              onClick={addClassFn}
            >
              <span>Hide Details</span>
            </button>
          </div>
          {/* TABLE */}
          <div className="col-md-7 col-11 mt-3 showMe" ref={addBtn}>
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Server</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}

      {/* SHOW INITIAL LOADER */}
      {empty ? (
        <div
          className="row d-flex justify-content-center align-items-center mt-md-3 floatingIcon"
          style={{
            paddingTop: "1rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingBottom: "2rem",
          }}
        >
          <div
            className="col-12 col-md-8  d-flex justify-content-center"
            style={{}}
          >
            <img
              className="iconAnm"
              src={icon}
              alt="search-icon"
              style={{ maxWidth: "60%", height: "15rem" }}
            />
          </div>

          <div className="col-8 col-md-6 mt-3 d-flex justify-content-center">
            {" "}
            <p className="reduceMe">NO RECORDS FOUND</p>
          </div>
        </div>
      ) : null}

      {/* BACKGROUND ANIMATION */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Logs;
