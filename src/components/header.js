const header = () => {
    return `
        <header class="py-6">
            <div class="flex flex-row items-center justify-between 
            w-4/5 sm:w-2/3 mx-auto gap-4">
                <section class="w-1/2 flex flex-row items-center justify-start">
                    <h1 class="text-tahiti-800 dark:text-tahiti-100 text-3xl
                    font-sans font-medium hover:cursor-pointer hover:text-tahiti-600
                    hover:dark:text-tahiti-200 transition-colors" id="logo">
                        Neto's House
                    </h1>
                </section>

                <section class="w-1/2 text-right flex flex-row items-center justify-end">
                    <button class="py-2 px-4 bg-tahiti-200 text-lg text-tahiti-900
                    rounded-full shadow-md hover:shadow-none shadow-tahiti-600 font-medium
                    dark:bg-tahiti-600 dark:text-gray-100 transform hover:-translate-y-[1.5px]
                    dark:shadow-zinc-900 hover:dark:shadow-none transition-all"
                    id="message">
                        Que onda
                    </button>
                </section>
            </div>
        </header>
    `;
}

export default header;