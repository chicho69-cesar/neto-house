import { getRoomieTodayTurn } from '../utils/roomies'

export default function Turn() {
  const { roomie } = getRoomieTodayTurn()

  return (
    <section className='my-8 flex flex-col-reverse items-center justify-center gap-10 px-4 py-10 md:my-10 md:flex-row md:gap-16'>
      <main className='w-full max-w-2xl'>
        <div className='rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 md:p-8'>
          <div className='inline-flex items-center gap-2 rounded-full bg-tahiti-800/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.35em] text-tahiti-800 dark:bg-white/10 dark:text-white'>
            Tareas de hoy
          </div>

          <h2 className='mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl'>
            ¿Qué es lo que se debe hacer?
          </h2>

          <div id='separator' className='mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-tahiti-800 via-sky-500 to-emerald-400'></div>

          <p className='mt-6 text-lg leading-7 text-slate-700 dark:text-slate-300'>
            Las tareas que se deben de llevar a cabo principalmente son las siguientes:
          </p>

          <ul className='mt-6 space-y-3'>
            <li className='rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-lg text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40 dark:text-slate-200'>
              🤢 Barrer y trapear la cocina.
            </li>

            <li className='rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-lg text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40 dark:text-slate-200'>
              🍕 Limpiar la estufa y la mesa.
            </li>

            <li className='rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-lg text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40 dark:text-slate-200'>
              🐷 Recoger la basura y llevarla a tirar.
            </li>

            <li className='rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-lg text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40 dark:text-slate-200'>
              👨‍🦯 Barrer el patio. <span className='italic text-slate-500 dark:text-slate-400'>(opcional)</span>
            </li>
          </ul>
        </div>
      </main>

      <aside className='relative w-full max-w-sm'>
        <div className='absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-tahiti-800/15 via-transparent to-emerald-400/20 blur-2xl'></div>

        <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.2)]'>
          <img
            src={roomie.image}
            alt={roomie.name}
            loading='lazy'
            decoding='async'
            className='h-[26rem] w-full object-cover object-center'
          />

          <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5'>
            <div className='inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.35em] text-white/75 backdrop-blur'>
              Turno actual
            </div>

            <h3 className='mt-3 text-2xl font-black text-white drop-shadow-md'>
              {roomie.name}
            </h3>
          </div>
        </div>
      </aside>
    </section>
  )
}
