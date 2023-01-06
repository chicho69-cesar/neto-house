import { kitchenDates } from "../modules/dates";

const getInfo = () => {
	const dateNow = new Date(Date.now());
	let day = dateNow.getDate(), 
		month = dateNow.getMonth(), 
		year = dateNow.getFullYear();

	const months = [
		'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
		'Julio', 'Agosto', 'Sept', 'Octubre', 'Nov', 'Dic'
	];

	let dateNowStr = '';

	dateNowStr = day < 10 ? `0${ day }` : `${ day }`;
	dateNowStr = `${ dateNowStr }/${ months[month] }`;
	dateNowStr = `${ dateNowStr }/${ year }`;

	for (let date of kitchenDates()) {
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

export default getInfo;
