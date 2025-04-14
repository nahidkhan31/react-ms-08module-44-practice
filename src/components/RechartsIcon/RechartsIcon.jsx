import React, { use } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import ResultTable from "../ResultTable/ResultTable";

const RechartsIcon = ({ rechartsPromise }) => {
  const data = use(rechartsPromise);
  return (
    <div className="">
      {/* <h1 className="text-2xl ml-10">Results Charts</h1> */}
      <div>
        <ResultTable data={data}></ResultTable>
      </div>
      <h1 className="text-2xl ml-10">Results Charts</h1>
      <div className="mt-5">
        <LineChart width={800} height={500} data={data}>
          <XAxis dataKey={"name"} />
          <YAxis dataKey={""} />
          <Line dataKey={"math"} stroke="purple"></Line>
          <Line dataKey={"physics"} stroke="red"></Line>
          <Line dataKey={"chemistry"} stroke="blue"></Line>
          <Line dataKey={"biology"} stroke="green"></Line>
        </LineChart>
      </div>
    </div>
  );
};

export default RechartsIcon;
