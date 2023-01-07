import { kitchenDates, roomies } from "../modules/data";
import { getCurrentDate } from "./dates";

export function getRoomieTurn() {
  let { day, month } = getCurrentDate()
  let dates = kitchenDates();

  let dataCleanliness = dates.find(date => date.month === month);
  let roomieDataCleanliness = dataCleanliness.dates.find(date => date.day === day || date.limit === day);
  
  if (roomieDataCleanliness == undefined) {
    return {
      id: 0,
      title: 'El aseo de hoy no le toca a',
      person: 'Nadie',
      band: false
    };
  }
  
  let roomie = roomies().find(room => room.id === roomieDataCleanliness.roomie)

  return {
    id: roomie.id,
    title: 'El aseo de hoy le toca a',
    person: roomie.name,
    band: true
  };
}
