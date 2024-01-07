import { baths } from '../data/data'

export function getBathTurn(id) {
  const bathsTurns = baths().filter((bath) => bath.id === id).pop()
  return bathsTurns
}
