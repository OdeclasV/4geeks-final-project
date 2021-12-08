import React from "react";
import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js"; // due to some quirkiness I can't explain, lines 4 and 5 are needed for chart to render

Chart.register(...registerables);

export const LineGraph = () => {
	return (
		<div>
			<Line
				data={{
					labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
					datasets: [
						{
							label: "Current Month",
							data: [60, 25, 140, 120],
							backgroundColor: [
								"rgba(70, 167, 127, 1)",
								"rgba(70, 167, 127, 1)",
								"rgba(70, 167, 127, 1)",
								"rgba(70, 167, 127, 1)"
							],
							borderColor: [
								"rgba(70, 167, 127, 1)",
								"rgba(70, 167, 127, 1)",
								"rgba(70, 167, 127, 1)",
								"rgba(70, 167, 127, 1)"
							],
							borderWidth: 1
						},
						{
							label: "Last  Month",
							data: [25, 70, 30, 100],
							backgroundColor: [
								"rgba(23, 91, 157, 1)",
								"rgba(23, 91, 157, 1)",
								"rgba(23, 91, 157, 1)",
								"rgba(23, 91, 157, 1)"
							],
							borderColor: [
								"rgba(23, 91, 157, 1)",
								"rgba(23, 91, 157, 1)",
								"rgba(23, 91, 157, 1",
								"rgba(23, 91, 157, 1)"
							],
							borderWidth: 1
						}
						// {
						// 	label: "Quatity",
						// 	data: [100, 104, 508, 900, 50],
						// 	backgroundColor: "orange",
						// 	borderColor: "red"
						// }
					]
				}}
				height={200}
				width={"100%"}
				options={{
					maintainAspectRatio: false,
					scales: {
						xAxes: [
							{
								gridLines: {
									display: false
								}
							}
						],
						yAxes: [
							{
								gridLines: {
									display: false
								}
							}
						]
					}
				}}
			/>
		</div>
	);
};
