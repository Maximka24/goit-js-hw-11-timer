const refs = {
	timerDays: document.querySelector('[data-value="days"]'),
	timerHours: document.querySelector('[data-value="hours"]'),
	timerMins: document.querySelector('[data-value="mins"]'),
	timerSecs: document.querySelector('[data-value="secs"]'),
	mainTitle: document.querySelector('.main-title')
}

class Timer {
	constructor ({onTick}) {
		this.targetDate = 'Jul 17 2021';
		// this.targetDate = 'Jun 13 2021 10:38:00';

		this.timeIntervalId = null;
		this.onTick = onTick;
	}
	pad(value) {
		return String(value).padStart(2, '0')
	}

	onTimeComponents(time) {
		if (Date.parse(time) <= Date.parse(new Date())) {
			const total = 0;
			const days = 0;
			const hours = 0;
			const mins = 0;
			const secs = 0;
			return {total, days, hours, mins, secs };
		}
		const total = Date.parse(time) - Date.parse(new Date());
		const days = this.pad(Math.floor(total / (1000 * 60 * 60 * 24)));
		const hours = this.pad(Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		const mins = this.pad(Math.floor((total % (1000 * 60 * 60)) / (1000 * 60)));
		const secs = this.pad(Math.floor((total % (1000 * 60)) / 1000));

		return {total, days, hours, mins, secs }
	}
	
	initializeClock() {
		this.onTick();
		this.timeIntervalId = setInterval(updateClockFace, 1000)
	}
}

const timer = new Timer({
	onTick: updateClockFace,
});

function updateClockFace() {
	const t = timer.onTimeComponents(timer.targetDate);

	refs.timerDays.innerHTML = t.days;
	refs.timerHours.innerHTML = ('0' + t.hours).slice(-2);
	refs.timerMins.innerHTML = ('0' + t.mins).slice(-2);
	refs.timerSecs.innerHTML = ('0' + t.secs).slice(-2);

	if (t.total <= 0) {
		clearInterval(timer.timeIntervalId);
		refs.mainTitle.textContent = 'Распродажа закончилась!!!';
		refs.mainTitle.style.color = '#ff0000';
	}
}

timer.initializeClock()















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

