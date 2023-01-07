import { months } from "../modules/data";

export function getTodayDateInString() {
  const dateNow = new Date(Date.now());

	let day = dateNow.getDate(), 
		month = dateNow.getMonth(), 
		year = dateNow.getFullYear();

  let arrayMonths = months();
  let completeMonth = arrayMonths
    .find(m => m.id === month)
    .month;

  let stringDay = (day < 10 ? `0` : '') + day;
  let stringMonth = completeMonth;
  let stringYear = `${ year }`;

  let todayInString = `${ stringDay }/${ stringMonth }/${ stringYear }`;
  return todayInString;
}
