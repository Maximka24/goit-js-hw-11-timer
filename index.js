const refs = {
	timerDays: document.querySelector('[data-value="days"]'),
	timerHours: document.querySelector('[data-value="hours"]'),
	timerMins: document.querySelector('[data-value="mins"]'),
	timerSecs: document.querySelector('[data-value="secs"]')
}


class Timer {
	constructor ({onTick}) {
		this.onTick = onTick;
		
	}
	pad(value) {
		return String(value).padStart(2, '0')
	}

	onTimeComponents(time) {
		const total = Date.parse(time) - Date.parse(new Date());
		const days = this.pad(Math.floor(total / (1000 * 60 * 60 * 24)));
		const hours = this.pad(Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		const mins = this.pad(Math.floor((total % (1000 * 60 * 60)) / (1000 * 60)));
		const secs = this.pad(Math.floor((total % (1000 * 60)) / 1000));

		return {total, days, hours, mins, secs }
	}
	
	initializeClock(time) {
		
		function updateClockFace() {
			const t = timer.onTimeComponents(time);

			refs.timerDays.innerHTML = t.days;
			refs.timerHours.innerHTML = ('0' + t.hours).slice(-2);
			refs.timerMins.innerHTML = ('0' + t.mins).slice(-2);
			refs.timerSecs.innerHTML = ('0' + t.secs).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}		
		updateClockFace()
		const timeinterval = setInterval(updateClockFace, 1000)
	}
}

const timer = new Timer({
	// onTick: updateClockFace,
});

// const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
const deadline='2021-06-14';

timer.initializeClock(deadline)















//* --------------------------------------------------------------------------*//

// class Timer {
// 	constructor ({onTick}) {
// 		// this.intervalId = null;
// 		this.onTick = onTick;
// 	}

// 	start() {
// 		const startTime = Date.now();

// 		this.intervalId = setInterval(() => {
// 			const currentTime = Date.now()
// 			const deltaTime = currentTime - startTime;
// 			const time = this.onTimeComponents(deltaTime);
			
// 			this.onTick(time);

// 		}, 1000)
// 	}

// 	pad(value) {
// 		return String(value).padStart(2, '0')
// 	}

// 	onTimeComponents (time) {
// 		const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
// 		const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// 		const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// 		const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

// 		return {days, hours, mins, secs }
// 	}	

// }

// const timer = new Timer({
// 	onTick: updateClockface
// });

// function updateClockface({ days, hours, mins, secs }) {
// 	refs.timerDays.textContent = `${days}`;
// 	refs.timerHours.textContent = `${hours}`;
// 	refs.timerMins.textContent = `${mins}`;
// 	refs.timerSecs.textContent = `${secs}`;
// }

// timer.start()

