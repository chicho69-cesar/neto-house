import { kitchenDates, roomies } from "../modules/data";
import { getCurrentDate } from "./dates";

function parseDate(month, isMonth = true) {
  let trueMonth = month;
  if (isMonth) trueMonth++;

  return trueMonth < 10
    ? `0${ trueMonth }`
    : `${ trueMonth }`;
}

export function getCalendarEvents() {
  let dates = kitchenDates();
  let dataRoomies = roomies();
  let { year } = getCurrentDate();

  let events = [];
  
  dates.map(dateElement => {
    let month = parseDate(dateElement.month);
    let currentEvents = [];

    dateElement.dates.forEach(date => {
      let roomie = dataRoomies
        .find(room => room.id === date.roomie);

      let startDate = `${ year }-${ month }-${ parseDate(date.day, false) }`;
      let endDate = `${ year }-${ month }-${ parseDate(date.limit + 1, false) }`;

      currentEvents.push({
        title: roomie.name,
        color: roomie.color,
        start: startDate,
        end: endDate
      });
    });

    events = [ ...events, ...currentEvents ];
  }, []);

  return events;
}
