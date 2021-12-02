import { ResponsiveBar } from "@nivo/bar";
import { memo } from "react";

const BarGraph = ({ keys, data }) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    layout={`horizontal`}
    groupMode={`grouped`}
    indexBy="country"
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    padding={1}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "category10" }}
    padding={0}
    innerPadding={10}
    enableGridY={false}
    enableGridX={false}
    animate={false}
    axisBottom={null}
    axisLeft={null}
    labelTextColor="#ffffff"
  />
);

export default memo(BarGraph);
