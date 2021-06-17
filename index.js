const refs = {
	mainTitle: document.querySelector('.main-title')
}

class Timer {
	constructor ({ targetDate, selector }) {
		this.targetDate = targetDate;
		this.selector = selector;
		this.timeIntervalId = null;	
	}		
	
	initializeClock() {		
		const clock = document.querySelector(this.selector);
		const timerDays = clock.querySelector('[data-value="days"]');
		const timerHours = clock.querySelector('[data-value="hours"]');
		const timerMins = clock.querySelector('[data-value="mins"]');
		const timerSecs = clock.querySelector('[data-value="secs"]');

		this.timeIntervalId = setInterval(() => {
			if (Number(timerDays.textContent) === 0 & Number(timerHours.textContent) === 0 & Number(timerMins.textContent) === 0 & Number(timerSecs.textContent) === 0) {
				clearInterval(this.intervalId);
				refs.mainTitle.textContent = 'Распродажа закончилась!!!';
				refs.mainTitle.style.color = '#ff0000';
				returnЖ;
			}

			const times = this.onTimeComponents(this.targetDate);
			this.updateClockFace(times, timerDays, timerHours, timerMins, timerSecs);

		}, 1000)			
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

	updateClockFace({days, hours, mins, secs}, timerDays, timerHours, timerMins, timerSecs) {
		timerDays.innerHTML = days;
		timerHours.innerHTML = ('0' + hours).slice(-2);
		timerMins.innerHTML = ('0' + mins).slice(-2);
		timerSecs.innerHTML = ('0' + secs).slice(-2);
	}
}




const timer = new Timer({
	targetDate : 'Jun 20 2021 17:19:00',
	selector : '#timer-1',
});

timer.initializeClock()
