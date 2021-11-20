import React, { useState, useEffect } from "react";

export const Timer = () => {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		let difference = +new Date(`11/21/${year}`) - +new Date();

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}
		return timeLeft;
	};
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach(interval => {
		if (!timeLeft[interval]) {
			return;
		}
		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});
	return <div>{timerComponents.length ? timerComponents : <span>Times up!</span>}</div>;
};
