const header = () => {
    return `
        <header class="py-6">
            <div class="flex flex-row items-center justify-between 
            w-4/5 sm:w-2/3 mx-auto gap-4">
                <section class="w-1/2 flex flex-row items-center justify-start">
                    <h1 class="text-tahiti-800 dark:text-tahiti-100 text-3xl
                    font-sans font-medium">
                        Neto's House
                    </h1>
                </section>

                <section class="w-1/2 text-right flex flex-row items-center justify-end">
                    <button class="py-2 px-4 bg-tahiti-400 text-lg text-white
                    rounded-full shadow-md hover:shadow-none shadow-tahiti-600 transition-all"
                    id="today">
                        Aseo hoy
                    </button>
                </section>
            </div>
        </header>
    `;
}

export default header;