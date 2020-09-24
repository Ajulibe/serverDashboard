import React, { useState } from "react";
import axios from "axios";
// import Barchart from "./Barchart";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  Label,
  LabelList,
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
    Surge: 0,
    GTAssistant: 10,
    GTCommunity: 10,
    LiveWrapper: 10,
    TestWrapper: 10,
  });

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

  const fetchAnalysis = async () => {
    console.log(months, year);
    const response = await axios.post(
      "https://auto-response-mail-backend.herokuapp.com/analytics",
      {
        months: months,
        year: year,
      }
    );

    console.log(response.data.serverDownCount);
    const Servers = response.data.serverDownCount;

    setInfo({
      Surge: Servers.Surge,
      GTAssistant: Servers.GTAssistant,
      GTCommunity: Servers.GTCommunity,
      LiveWrapper: Servers.LiveWrapper,
      TestWrapper: Servers.TestWrapper,
    });
  };

  return (
    <div className="container">
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{
          marginTop: "5%",
          backgroundColor: "rgb(255, 117, 37)",
          padding: "0.6rem",
        }}
      >
        <div className="col-md-3">
          <select
            class="form-control form-control-sm"
            style={{ border: "1px solid rgb(255, 117, 37)", borderRadius: "0" }}
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
        <div className="col-md-3">
          <select
            class="form-control form-control-sm"
            style={{ border: "1px solid rgb(255, 117, 37)", borderRadius: "0" }}
            value={year}
            onChange={optionsYearChange}
          >
            <option defaultValue>Select Year --</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      {/* BUTTON */}
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{}}
      >
        <div
          className="col-3 text-center mt-5"
          style={{
            fontWeight: "100",
          }}
        >
          <button
            className="botn"
            style={{
              fontWeight: "100",
            }}
            onClick={fetchAnalysis}
          >
            <span className="sendadd">
              Get Analysis &nbsp;{" "}
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      {/* CHART */}
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div
          className="card cardsBlack2 d-flex align-items-center justify-content-center p-auto"
          style={{
            paddingTop: "3rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingBottom: "2rem",
          }}
        >
          <ResponsiveContainer width={500} height={300}>
            <BarChart
              //   width={300}
              //   height={300}
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
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
                }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="Surge" fill="#8884d8" />

              <Bar dataKey="GTAssistant" fill="#F47560" />

              <Bar dataKey="GTCommunity" fill="#CCBF4D" />

              <Bar dataKey="TestWrapper" fill="#61CDBB" />
              <Bar dataKey="LiveWrapper" fill="#E8A838" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Logs;
