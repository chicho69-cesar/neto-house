import LinkItem from './LinkItem'

export default function Header() {
  return (
    <header className='flex flex-row items-center justify-between w-full p-4' id='home'>
      <div className='transition hover:scale-105'>
        <a className='flex flex-row items-center justify-start gap-2' href='https://chicho69-cesar.github.io/neto-house/'>
          <img
            className='object-cover object-center rounded-md shadow-md size-8 md:size-12' 
            src='/neto-house/favicon.jpg'
            loading='lazy'
            decoding='async'
          />

          <h1 className='hidden text-2xl font-bold text-tahiti-800 dark:text-white hover:text-tahiti-600 dark:hover:text-gray-200 md:block'>
            Neto's House
          </h1>
        </a>
      </div>

      <nav>
        <ul className='flex flex-row items-center justify-end gap-4'>
          <LinkItem link='#home'>
            <i className='bi bi-house'></i> 
            <span className='hidden md:inline'>inicio</span>
          </LinkItem>

          <LinkItem link='#kitchen'>
            <i className='bi bi-basket'></i> 
            <span className='hidden md:inline'>cocina</span>
          </LinkItem>

          <LinkItem link='#bath'>
            <i className='bi bi-person-lock'></i> 
            <span className='hidden md:inline'>baños</span>
          </LinkItem>
        </ul>
      </nav>
    </header>
  )
}
