import React from "react";
import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js"; // due to some quirkiness I can't explain, lines 4 and 5 are needed for chart to render
Chart.register(...registerables);

export const LineGraph = () => {
	return (
		<div>
			<Line
				data={{
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
					datasets: [
						{
							label: "total funds",
							data: [25, 50, 100, 250, 500, 1500],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)"
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)"
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
				height={300}
				width={500}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true
								}
							}
						]
					}
				}}
			/>
		</div>
	);
};
