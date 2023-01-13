import { getRoomieTodayTurn } from "../utils/roomies";

const init = () => {
  const { roomie } = getRoomieTodayTurn();

  return `
    <div class="py-12 my-6 flex flex-row flex-wrap justify-center gap-12 items-start">
      <main>
        <section>
          <h2 class="mb-2 text-3xl font-bold text-black dark:text-white">
            ¿Qué es lo que se debe hacer?
          </h2>

          <div id="separator" class="h-1 w-2/3 mb-6 bg-black
          dark:bg-white"></div>

          <p class="text-lg text-black dark:text-white">
            Las tareas que se deben de llevar a cabo <br/>
            principalmente son las siguientes: <br/><br/>

            <span>🤢 Barrer y trapear la cocina.</span> <br/>
            <span>🍕 Limpiar la estufa y la mesa.</span> <br/>
            <span>🐷 Recoger la basura y llevarla a tirar.</span> <br/>
            <span>👨‍🦯 Barrer el patio. <i>(opcional)</i></span> <br/>
          </p>
        </section>
      </main>

      <aside class="relative">
        <img src="${ roomie.image }" alt="${ roomie.name }"
        class="w-80 h-92 object-cover object-center 
        rounded-lg shadow-lg"/>

        <div class="w-full absolute flex justify-center -bottom-4">
          <h3 class="w-2/3 py-2 bg-black text-white dark:bg-white dark:text-black 
          text-center text-lg font-bold rounded-md shadow-md">
            ${ roomie.name }
          </h3>
        </div>
      </aside>
    </div>
  `;
}

export default init;
