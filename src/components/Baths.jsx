import { getBathTurn } from '../utils/baths'
import Bath from './Bath'

export default function Baths() {
  return (
    <div className='pt-12 my-20' id='bath'>
      <div className='w-full mx-auto md:w-2/3'>
        <h3 className='mb-4 text-3xl font-bold text-center text-black dark:text-white'>
          ¿Rol de los baños?
        </h3>

        <p className='text-lg leading-6 text-center text-black dark:text-white'>
          El aseo de los baños es responsabilidad de cada quien el baño 
          que le corresponde, ahi cada quien sabe cuando le toca y que es 
          lo que le toca hacer para limpiar su baño.
        </p>
      </div>

      <section className='flex flex-row flex-wrap justify-center gap-4 my-12 md:gap-12'>
        <Bath bath={getBathTurn(1)} isLeft />
      </section>

      <section className='flex flex-row flex-wrap justify-center gap-4 my-12 md:gap-12'>
        <Bath bath={getBathTurn(2)} isLeft={false} />
      </section>
      
      <section className='flex flex-row flex-wrap justify-center gap-4 my-12 md:gap-12'>
        <Bath bath={getBathTurn(3)} isLeft />
      </section>
    </div>
  )
}
