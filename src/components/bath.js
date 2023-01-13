import { getBathTurn } from "../utils/baths";
import bathComponent from "./bath-component";

const bath = () => {
  return `
    <div class="pt-12 my-20">
      <div class="w-full md:w-2/3 mx-auto">
        <h3 class="text-3xl font-bold text-black dark:text-white text-center mb-4">
          ¿Rol de los baños?
        </h3>

        <p class="text-lg text-black dark:text-white text-center leading-6">
          El aseo de los baños es responsabilidad de cada quien el baño 
          que le corresponde, ahi cada quien sabe cuando le toca y que es 
          lo que le toca hacer para limpiar su baño.
        </p>
      </div>

      <section class="my-12 flex flex-row flex-wrap gap-4 md:gap-12 justify-center">
        ${ bathComponent(getBathTurn(1), true) }
      </section>

      <section class="my-12 flex flex-row flex-wrap gap-4 md:gap-12 justify-center">
        ${ bathComponent(getBathTurn(2), false) }
      </section>
      
      <section class="my-12 flex flex-row flex-wrap gap-4 md:gap-12 justify-center">
        ${ bathComponent(getBathTurn(3), true) }
      </section>
    </div>
  `;
}

export default bath;
