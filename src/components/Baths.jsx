import { getBathTurn } from '../utils/baths'
import Bath from './Bath'

export default function Baths() {
  return (
    <section className='bath-section pt-12 my-20 px-4' id='bath'>
      <div className='bath-section__intro w-full mx-auto md:w-2/3'>
        <h3 className='mb-4 text-3xl font-bold text-center text-black dark:text-white md:text-4xl'>
          ¿Rol de los baños?
        </h3>

        <p className='text-lg leading-7 text-center text-black dark:text-white'>
          El aseo de los baños es responsabilidad de cada quien el baño 
          que le corresponde, ahi cada quien sabe cuando le toca y que es 
          lo que le toca hacer para limpiar su baño.
        </p>
      </div>

      <div className='bath-section__list mt-12 space-y-8 md:space-y-10'>
        <section className='bath-card-shell'>
          <Bath bath={getBathTurn(1)} isLeft />
        </section>

        <section className='bath-card-shell bath-card-shell--reverse'>
          <Bath bath={getBathTurn(2)} isLeft={false} />
        </section>

        <section className='bath-card-shell'>
          <Bath bath={getBathTurn(3)} isLeft />
        </section>
      </div>
    </section>
  )
}
