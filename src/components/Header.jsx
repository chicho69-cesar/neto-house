import LinkItem from './LinkItem'

export default function Header() {
  return (
    <header className='sticky top-0 z-30 w-full px-4 pt-4' id='home'>
      <div className='flex flex-row items-center justify-between w-full gap-4 rounded-2xl border border-black/5 bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/75'>
        <div className='transition duration-200 hover:scale-[1.02]'>
          <a className='flex flex-row items-center justify-start gap-3' href='https://chicho69-cesar.github.io/neto-house/'>
          <img
            className='object-cover object-center rounded-xl shadow-md size-9 md:size-12 ring-2 ring-white/70 dark:ring-slate-800'
            src='/neto-house/favicon.jpg'
            loading='lazy'
            decoding='async'
          />

            <div className='hidden md:block'>
              <h1 className='text-2xl font-black tracking-tight text-tahiti-800 dark:text-white'>
                Neto's House
              </h1>
            </div>
          </a>
        </div>

        <nav>
          <ul className='flex flex-row items-center justify-end gap-2 sm:gap-3'>
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
      </div>
    </header>
  )
}
