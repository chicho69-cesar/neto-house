import { months } from '../data/data'

export function getCurrentDate() {
  const dateNow = new Date(Date.now())

  return {
    day: dateNow.getDate(),
    month: dateNow.getMonth(),
    year: dateNow.getFullYear()
  }
}

export function getTodayDateInString() {
  const { day, month, year } = getCurrentDate()

  const arrayMonths = months()
  const completeMonth = arrayMonths
    .find((m) => m.id === month)
    .month

  const stringDay = (day < 10 ? `0` : '') + day
  const stringMonth = completeMonth
  const stringYear = `${year}`

  const todayInString = `${stringDay}/${stringMonth}/${stringYear}`
  return todayInString
}
