import React, { PureComponent, useState } from "react";
// import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    Surge: 4000,
    GTAssistant: 2400,
    GTCommunity: 2000,
    LiveWrapper: 1000,
    TestWrapper: 2000,
    amt: 2400,
  },
];

export default class Barchart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <BarChart
        width={200}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Surge" fill="#8884d8" />
        <Bar dataKey="GTAssistant" fill="#82ca9d" />
        <Bar dataKey="GTCommunity" fill="#82ca9d" />
        <Bar dataKey="TestWrapper" fill="#82ca9d" />
        <Bar dataKey="LiveWrapper" fill="#82ca9d" />
      </BarChart>
    );
  }
}
