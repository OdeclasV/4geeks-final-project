import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js"; // due to some quirkiness I can't explain, lines 4 and 5 are needed for chart to render
Chart.register(...registerables);

export const BarGraph = () => {
	return (
		<div>
			<Bar
				data={{
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of votes",
							data: [12, 19, 3, 5, 2, 3],
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
						},
						{
							label: "Quatity",
							data: [100, 104, 508, 900, 50],
							backgroundColor: "orange",
							borderColor: "red"
						}
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
// 	// data.day
// 	const [data, setData] = React.useState({
// 		x: ["01012021", "01012021", "01012021", "01012021", "01012021"],
// 		y: [100, 200, 150, 200, 500]
// 	});
// 	const grapchData = {
// 		labels: data.x,
// 		datasets: [
// 			{
// 				label: "Visits",
// 				data: data.y,
// 				pointRadius: 10,
// 				pointHitRadius: 20,
// 				pointHoverRadius: 7,
// 				pointBackgroundColor: "#9CD69C"
// 			}
// 		]
// 	};
// 	const graphOptions = {
// 		layout: {
// 			padding: 20
// 		},
// 		plugins: {
// 			legend: {
// 				display: false
// 			}
// 		},
// 		elements: {
// 			line: {
// 				borderColor: "#9CD69C",
// 				borderWidth: 6,
// 				tension: 0.2,
// 				fill: true,
// 				backgroundColor: "rgba(154, 216, 154, 0.5)"
// 			}
// 		},
// 		scales: {
// 			y: {
// 				beginAtZero: true,
// 				ticks: {
// 					padding: 20,
// 					color: "#AAAAAA",
// 					font: {
// 						size: 20
// 					}
// 				},
// 				grid: {
// 					display: false
// 				}
// 			},
// 			x: {
// 				ticks: {
// 					padding: 20,
// 					color: "#AAAAAA",
// 					font: {
// 						size: 20
// 					}
// 				}
// 			}
// 		}
// 	};
// 	return <Line data={grapchData} options={graphOptions} />;
// };
