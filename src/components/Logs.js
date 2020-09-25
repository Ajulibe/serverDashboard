import React, { useState, useRef } from "react";
import axios from "axios";
import icon from "./icon.svg";
// import Barchart from "./Barchart";
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

const Logs = () => {
  const [months, setMonths] = useState("");
  const [year, setYear] = useState("");
  const [info, setInfo] = useState({
    Surge: 10,
    GTAssistant: 10,
    GTCommunity: 10,
    LiveWrapper: 10,
    TestWrapper: 10,
  });
  const [content, setContent] = useState("");

  const [empty, setEmpty] = useState(true);

  const addBtn = useRef();
  const firstBtn = useRef();
  const secondBtn = useRef();

  //CHART INFO
  const data = [
    // {
    //   name: "Available Servers",
    //   Surge: info.Surge,
    //   GTAssistant: info.GTAssistant,
    //   GTCommunity: info.GTCommunity,
    //   LiveWrapper: info.LiveWrapper,
    //   TestWrapper: info.TestWrapper,
    //   //   amt: 2400,
    // },
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
      name: "LiveWrapper",
      LiveWrapper: info.LiveWrapper,
    },
    {
      name: "TestWrapper",
      TestWrapper: info.TestWrapper,
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
    setEmpty(false);
    console.log(months, year);
    const response = await axios.post(
      "https://auto-response-mail-backend.herokuapp.com/analytics",
      {
        months: months,
        year: year,
      }
    );

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
      LiveWrapper: Servers.LiveWrapper ? Servers.LiveWrapper : "0",
      TestWrapper: Servers.TestWrapper ? Servers.TestWrapper : "0",
    });

    setMonths("");
    setYear("");
  };

  const addClassFn = () => {
    console.log();
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
            className="botnAny"
            disabled={btnState}
            style={{
              fontWeight: "100",
              //   border: "1px solid white",
            }}
            onClick={fetchAnalysis}
          >
            <span>
              Search &nbsp;{" "}
              <i className="fa fa-search hideSearch" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      {/* CHART */}

      {empty ? (
        <div
          className="row d-flex justify-content-center align-items-center mt-md-3"
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
      ) : (
        <div className="row d-flex align-items-center justify-content-center mt-3">
          <div
            className="col-md-7 col-10 d-flex align-items-center justify-content-center p-auto"
            style={{
              //   paddingTop: "3rem",
              //   paddingRight: "1rem",
              //   paddingLeft: "1rem",
              //   paddingBottom: "2rem",
              height: "20rem",
              border: "1px solid rgba(225, 0, 0, 0.8)",
            }}
          >
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={data}
                margin={{
                  top: 0,
                  //   right: 10,
                  //   left: 10,
                  bottom: 30,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />

                <YAxis
                  label={{
                    value: "No. of times down",
                    angle: -90,
                    position: "insideLeft",
                    fill: "white",
                    fontSize: 10,
                  }}
                />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={5}
                  iconSize={6}
                  iconType="circle"
                />
                <Bar dataKey="Surge" fill="#8884d8" fontSize="10" />

                <Bar dataKey="GTAssistant" fill="#F47560" />

                <Bar dataKey="GTCommunity" fill="#CCBF4D" />

                <Bar dataKey="TestWrapper" fill="#61CDBB" />
                <Bar dataKey="LiveWrapper" fill="#E8A838" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="col-8 text-center mt-3">
            <button
              ref={firstBtn}
              className="botnAny"
              disabled={btnState}
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
              disabled={btnState}
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
      )}
    </div>
  );
};

export default Logs;
