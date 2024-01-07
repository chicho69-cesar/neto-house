import { getRoomie } from '../utils/roomies'

export default function RoomiesBubbles({ roomies }) {
  const map = {
    0: 'left-0',
    1: '-left-4',
    2: '-left-8',
    3: '-left-12',
  }

  return (
    <>
      {roomies.map((roomie, index) => {
        const data = getRoomie(roomie)

        return (
          <img
            key={data.name}
            src={data.image}
            alt={data.name}
            loading='lazy'
            decoding='async'
            title={data.name}
            className={`${map[index]} size-24 object-cover object-center rounded-full relative shadow border-4 border-tahiti-800 hover:-translate-y-2 transition`}
          />
        )
      })}
    </>
  )
}
