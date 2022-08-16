import { getTasks } from "../modules/tasks";

const container = () => {
    let tasks = getTasks();
    
    let content = tasks.reduce((acc, el) => {
        acc += `
            <article class="${ el.id } bg-tahiti-200 p-4 rounded-lg shadow-md
            shadow-tahiti-600 dark:bg-tahiti-600 dark:shadow-lg dark:shadow-zinc-900
            transform hover:-translate-y-1 hover:shadow-none dark:hover:shadow-none hover:cursor-pointer 
            transition-all flex flex-col gap-2 justify-between flex-nowrap items-start">
                <h2 class="text-2xl font-medium font-sans text-tahiti-900
                dark:text-gray-100">
                    ${ el.title }
                </h2>

                <p class="text-base text-tahiti-700 dark:text-gray-300 italic">
                    Tareas a realizar: 
                </p>

                <p class="text-base leading-5 md:text-lg md:leading-6
                text-tahiti-900 dark:text-gray-100 font-[450]">
                    ${ el.text }
                </p>
            </article>
        `;

        return acc;
    }, '');

    return `
        <main class="w-4/5 sm:w-2/3 mx-auto my-8 grid grid-cols-1 gap-8
        lg:grid-cols-2">
            ${ content }
        </main>
    `;
}

export default container;