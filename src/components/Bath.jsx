import RoomiesBubbles from './RoomiesBubbles'

export default function Bath({ bath, isLeft }) {
  return (
    <div className='bath-layout'>
      {isLeft ? (
        <>
          <div className='bath-layout__media'>
            <h4 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
              {bath.location}
            </h4>

            <img
              src={bath.gif}
              alt={bath.location}
              loading='lazy'
              decoding='async'
              className='bath-layout__image object-cover object-top h-48 rounded-3xl shadow-md w-72'
            />
          </div>

          <div className='bath-layout__people'>
            <h5 className='mb-4 text-lg font-semibold text-slate-900 dark:text-white'>
              Los que les toca este baño
            </h5>

            <div className='bath-layout__bubbles'>
              <RoomiesBubbles roomies={bath.roomies} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='bath-layout__people'>
            <h5 className='mb-4 text-lg font-semibold text-slate-900 dark:text-white'>
              Los que les toca este baño
            </h5>

            <div className='bath-layout__bubbles'>
              <RoomiesBubbles roomies={bath.roomies} />
            </div>
          </div>

          <div className='bath-layout__media order-first md:order-2'>
            <h4 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
              {bath.location}
            </h4>

            <img
              src={bath.gif}
              alt={bath.location}
              loading='lazy'
              decoding='async'
              className='bath-layout__image object-cover object-top h-48 rounded-3xl shadow-md w-72'
            />
          </div>
        </>
      )}
    </div>
  )
}
