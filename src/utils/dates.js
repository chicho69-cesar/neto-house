import { months } from "../modules/data";

export function getCurrentDate() {
  const dateNow = new Date(Date.now());

  let day = dateNow.getDate();
	let month = dateNow.getMonth(); 
	let year = dateNow.getFullYear();

  return { day, month, year };
}

export function getTodayDateInString() {
  let { day, month, year } = getCurrentDate();

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
