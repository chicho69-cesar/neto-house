import logo from '/public/favicon.jpg'

const header = () => {
  return `
    <header class="w-full p-4 flex flex-row justify-between items-center" id="home">
      <div class="logo hover:scale-95 transition">
        <a class="flex flex-row gap-2 justify-start items-center" href="/">
          <img class="w-8 h-8 md:w-12 md:h-12 object-cover object-center shadow-md rounded-md" 
          src="${ logo }"/>
          
          <h1 class="text-tahiti-800 dark:text-white hover:text-tahiti-600
          dark:hover:text-gray-200 text-2xl hidden md:block font-bold">
            Neto's House
          </h1>
        </a>
      </div>

      <nav class="">
        <ul class="flex flex-row justify-end items-center gap-4">
          <li>
            <a href="#home" class="text-lg text-tahiti-800 dark:text-white
            border-2 border-transparent rounded-lg hover:border-yellow-400
            hover:text-yellow-400 dark:hover:text-yellow-400 transition py-2 px-4">
              <i class="bi bi-house"></i> 
              <span class="hidden md:inline">inicio</span>
            </a>
          </li>

          <li>
            <a href="#bath" class="text-lg text-tahiti-800 dark:text-white
            border-2 border-transparent rounded-lg hover:border-yellow-400
            hover:text-yellow-400 dark:hover:text-yellow-400 transition py-2 px-4">
              <i class="bi bi-person-lock"></i> 
              <span class="hidden md:inline">baños</span>
            </a>
          </li>

          <li>
            <a href="#kitchen" class="text-lg text-tahiti-800 dark:text-white
            border-2 border-transparent rounded-lg hover:border-yellow-400
            hover:text-yellow-400 dark:hover:text-yellow-400 transition py-2 px-4">
              <i class="bi bi-basket"></i> 
              <span class="hidden md:inline">cocina</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `;
}

export default header;
