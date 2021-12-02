import React, { CanvasJS, CanvasJSChart, CanvasJSReact } from "react";

export const LineGraph = () => {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2",
		title: {
			text: "Donations by Weekday"
		},
		axisY: {
			title: "# of Donations",
			suffix: "%"
		},
		axisX: {
			title: "Day of Week",
			prefix: "W",
			interval: 1
		},
		data: [
			{
				type: "line",
				toolTipContent: "Day {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 3 },
					{ x: 2, y: 4 },
					{ x: 3, y: 1 },
					{ x: 4, y: 2 },
					{ x: 5, y: 0 },
					{ x: 6, y: 5 },
					{ x: 7, y: 4 }
				]
			}
		]
	};
	return (
		<div>
			<CanvasJSChart
				options={options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);
};
