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
							data: [200, 600, 500, 950],
							backgroundColor: ["rgba(33, 193, 135, 0.5)"],
							borderColor: ["rgba(33, 193, 135, 1)"],
							borderWidth: 1
						},
						{
							label: "Last  Month",
							data: [600, 300, 650, 500],
							backgroundColor: [
								"rgba(39, 90, 232, 0.5)"
								// "rgba(54, 162, 235, 0.2)",
								// "rgba(255, 206, 86, 0.2)",
								// "rgba(75, 192, 192, 0.2)"
							],
							borderColor: [
								"rgba(39, 90, 232, 1)"
								// "rgba(54, 162, 235, 1)",
								// "rgba(255, 206, 86, 1)",
								// "rgba(75, 192, 192, 1)"
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
