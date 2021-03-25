import { dateType } from "./const";

export type CalendarProps = {
	day: number,
	type: number
}

export const getCalendar = (month:number, year:number): Array<CalendarProps> => {
	const startDate = new Date(year, month, 1);
	const endDate = new Date(year, month + 1, 0);
	const resultPrev: Array<CalendarProps> = [];
	const result: Array<CalendarProps> = [];
	const resultNext: Array<CalendarProps> = [];

	if (startDate.getUTCDay() !== 0) {
		const startPrevDay = startDate.getUTCDay() - 1;
		let startPrevDate = new Date(year, month, 0).getDate();

		for (let i=startPrevDay; i>=0; i--) {
			resultPrev.push({
				day: startPrevDate,
				type: dateType.hidden
			});
			startPrevDate -= 1;
		}
	}

	if (endDate.getUTCDay() !== 6) {
		const startNextDay = endDate.getUTCDay() + 1;
		let startNextDate = 1;
		for (let i=startNextDay; i<=6; i++) {
			resultNext.push({
				day: startNextDate,
				type: dateType.hidden
			});
			startNextDate += 1;
		}
	}

	for (let i=1; i<=endDate.getDate(); i++) {
		result.push({
			day: i,
			type: dateType.active
		})
	}

	return [...resultPrev.reverse(), ...result, ...resultNext];
}