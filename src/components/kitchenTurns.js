const kitchenTurns = dates => {
    return dates.reduce((acc, el) => {
        return acc + `
            <article class="bg-tahiti-200 p-4 rounded-lg 
            dark:bg-tahiti-600 transform md:hover:scale-125 sm:hover:scale-110
            hover:scale-105 hover:shadow-lg hover:z-10 transition-all
            flex flex-col gap-2 justify-between flex-nowrap items-start">
                <h2 class="text-2xl font-medium font-sans w-full text-center
                text-tahiti-900 dark:text-gray-100">
                    ${ el.member }
                </h2>

                <div class="w-full flex flex-row flex-nowrap justify-around
                items-center py-2 gap-3 md:gap-8 text-center">
                    <section>
                        <p class="text-lg md:text-xl font-[450] font-sans">
                            Fecha optima: 😎
                        </p>

                        <p class="font-sans italic text-green-800 text-base md:text-lg">
                            ${ el.day }
                        </p>
                    </section>

                    <section>
                        <p class="text-lg md:text-xl font-[450] font-sans">
                            Fecha limite: 😶
                        </p>

                        <p class="font-sans italic text-red-800 text-base md:text-lg">
                            ${ el.limitDay }
                        </p>
                    </section>
                </div>
            </article>
        `;
    }, '');
}

export default kitchenTurns;