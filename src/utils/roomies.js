import { kitchenDates, roomies } from '../data/data'
import { getCurrentDate } from './dates'

export function getRoomieTurn() {
  const { day, month } = getCurrentDate()
  const dates = kitchenDates()

  const dataCleanliness = dates.find((date) => date.month === month)
  const roomieDataCleanliness = dataCleanliness.dates.find((date) => date.day === day || date.limit === day)

  if (roomieDataCleanliness == undefined) {
    return {
      id: 0,
      title: 'El aseo de hoy no le toca a',
      person: 'Nadie',
      band: false
    }
  }

  const roomie = roomies().find((room) => room.id === roomieDataCleanliness.roomie)

  return {
    id: roomie.id,
    title: 'El aseo de hoy le toca a',
    person: roomie.name,
    band: true
  }
}

export function getRoomieTodayTurn() {
  const { day, month } = getCurrentDate()
  const dates = kitchenDates()
  const roomiesInfo = roomies()

  const dataCleanliness = dates.find((date) => date.month === month)
  const roomieDataCleanliness = dataCleanliness.dates.find((date) => date.day === day || date.limit === day)

  if (roomieDataCleanliness === undefined) {
    return {
      todayFree: true,
      roomie: {
        id: 0,
        name: 'Nadie',
        image: '/neto-house/nobody.webp'
      }
    }
  }

  const roomie = roomiesInfo.find((room) => room.id === roomieDataCleanliness.roomie)

  return {
    todayFree: false,
    roomie
  }
}

export function getRoomie(id) {
  return roomies().find((roomie) => roomie.id === id)
}
