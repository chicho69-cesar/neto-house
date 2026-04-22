import { kitchenDates, roomies } from '../data/data'
import { getCurrentDate } from './dates'

function createDate(year, month, day) {
  return new Date(year, month, day, 12, 0, 0, 0)
}

function toIsoDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short'
  }).format(date)
}

function isWithinRange(targetDate, startDate, endDate) {
  return targetDate >= startDate && targetDate <= endDate
}

export function getCalendarSchedule() {
  const dates = kitchenDates()
  const dataRoomies = roomies()
  const { year, month: currentMonth, day: currentDay } = getCurrentDate()
  const today = createDate(year, currentMonth, currentDay)

  const schedule = []

  dates.forEach((dateElement) => {
    const monthIndex = dateElement.month

    dateElement.dates.forEach((date) => {
      const roomie = dataRoomies.find((room) => room.id === date.roomie)
      const startDate = createDate(year, monthIndex, date.day)
      const endMonthIndex = date.limit < date.day ? monthIndex + 1 : monthIndex
      const endDate = createDate(year, endMonthIndex, date.limit)
      const endExclusiveDate = createDate(year, endMonthIndex, date.limit + 1)
      const rangeLabel = `${formatShortDate(startDate)} - ${formatShortDate(endDate)}`

      schedule.push({
        id: `${year}-${monthIndex}-${date.day}-${date.limit}-${roomie.id}`,
        title: roomie.name,
        color: roomie.color,
        roomieName: roomie.name,
        roomieImage: roomie.image,
        startDate,
        endDate,
        start: toIsoDate(startDate),
        end: toIsoDate(endExclusiveDate),
        monthLabel: dateElement.month,
        monthName: new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(startDate),
        weekdayLabel: new Intl.DateTimeFormat('es-ES', { weekday: 'short' }).format(startDate),
        rangeLabel,
        isCurrent: isWithinRange(today, startDate, endDate)
      })
    })
  })

  return schedule.sort((left, right) => left.startDate - right.startDate)
}

export function getCalendarEvents() {
  return getCalendarSchedule().map((event) => ({
    id: event.id,
    title: event.title,
    color: event.color,
    start: event.start,
    end: event.end,
    backgroundColor: event.color,
    borderColor: event.color,
    textColor: '#ffffff',
    display: 'block',
    extendedProps: {
      roomieName: event.roomieName,
      roomieImage: event.roomieImage,
      rangeLabel: event.rangeLabel,
      weekdayLabel: event.weekdayLabel,
      isCurrent: event.isCurrent,
      color: event.color
    }
  }))
}
