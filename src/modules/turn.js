import { getTodayDateInString } from "../utils/dates";
import { kitchenDates } from "./data";

export default function getInfo() {
	let dateNowStr = getTodayDateInString();
	let dates = kitchenDates();

	for (let date of dates) {
		if (date.day === dateNowStr || date.limitDay === dateNowStr) {
			return {
				title: 'El aseo de hoy le toca a',
				person: date.member,
				band: true
			};
		}
	}

	return {
		title: 'El aseo de hoy no le toca a',
		person: 'Nadie',
		band: false
	};
}
