import { baths } from "../modules/data";

export function getBathTurn(id) {
  let bathsTurns = baths().filter(bath => bath.id === id).pop();
  return bathsTurns;
}
