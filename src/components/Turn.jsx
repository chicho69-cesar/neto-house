import { getRoomieTodayTurn } from '../utils/roomies'

export default function Turn() {
  const { roomie } = getRoomieTodayTurn()

  return (
    <div className='flex flex-row flex-wrap items-start justify-center gap-16 py-12 my-6'>
      <main>
        <section>
          <h2 className='mb-2 text-3xl font-bold text-black dark:text-white'>
            ¿Qué es lo que se debe hacer?
          </h2>

          <div id='separator' className='w-2/3 h-1 mb-6 bg-black dark:bg-white'></div>

          <p className='text-lg text-black dark:text-white'>
            Las tareas que se deben de llevar a cabo <br/>
            principalmente son las siguientes: <br/><br/>
          </p>

          <ul>
            <li>
              <p className='text-lg dark:text-gray-300'>
                🤢 Barrer y trapear la cocina.
              </p>
            </li>

            <li>
              <p className='text-lg dark:text-gray-300'>
                🍕 Limpiar la estufa y la mesa.
              </p>
            </li>

            <li>
              <p className='text-lg dark:text-gray-300'>
                🐷 Recoger la basura y llevarla a tirar.
              </p>
            </li>

            <li>
              <p className='text-lg dark:text-gray-300'>
                👨‍🦯 Barrer el patio. <span className='italic'>(opcional)</span>
              </p>
            </li>
          </ul>
        </section>
      </main>

      <aside className='relative'>
        <img
          src={roomie.image}
          alt={roomie.name}
          loading='lazy'
          decoding='async'
          className='object-cover object-center rounded-lg shadow-lg w-80 h-92'
        />

        <div className='absolute flex justify-center w-full -bottom-4'>
          <h3 className='w-2/3 py-2 text-lg font-bold text-center text-white bg-black rounded-md shadow-md dark:bg-white dark:text-black'>
            {roomie.name}
          </h3>
        </div>
      </aside>
    </div>
  )
}
