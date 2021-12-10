import React from "react";
import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js"; // due to some quirkiness I can't explain, lines 4 and 5 are needed for chart to render
Chart.register(...registerables);

export const LineGraphWeekly = () => {
	return (
		<div>
			<Line
				data={{
					labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
					datasets: [
						{
							label: "Current Week",
							data: [2, 0, 6, 2, 8, 0, 3],
							backgroundColor: ["rgba(33, 193, 135, 0.5)"],
							borderColor: ["rgba(33, 193, 135, 1)"],
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
						yAxes: [
							{
								ticks: {
									beginAtZero: true
								},
								gridLines: {
									display: false
								}
							}
						],
						xAxes: [
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
