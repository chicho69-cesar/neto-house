import RoomiesBubbles from './RoomiesBubbles'

export default function Bath({ bath, isLeft }) {
  return (
    <>
      {isLeft ? (
        <>
          <div>
            <h4 className='mb-4 text-xl font-semibold text-black dark:text-white'>
              {bath.location}
            </h4>
  
            <img
              src={bath.gif}
              alt={bath.location}
              loading='lazy'
              decoding='async'
              className='object-cover object-top h-48 rounded-lg shadow-md w-72'
            />
          </div>
  
          <div>
            <h5 className='mb-4 text-lg font-semibold text-black dark:text-white'>
              Los que les toca este baño
            </h5>
  
            <div className='flex flex-row'>
              <RoomiesBubbles roomies={bath.roomies} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h5 className='mb-4 text-lg font-semibold text-black dark:text-white'>
              Los que les toca este baño
            </h5>
            
            <div className='flex flex-row'>
              <RoomiesBubbles roomies={bath.roomies} />
            </div>
          </div>
  
          <div className='order-first md:order-2'>
            <h4 className='mb-4 text-xl font-semibold text-black dark:text-white'>
              {bath.location}
            </h4>
  
            <img
              src={bath.gif}
              alt={ bath.location}
              loading='lazy'
              decoding='async'
              className='object-cover object-top h-48 rounded-lg shadow-md w-72'
            />
          </div>
        </>
      )}
    </>
  )
}
