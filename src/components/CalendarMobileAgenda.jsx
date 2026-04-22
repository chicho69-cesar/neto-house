import { getCalendarSchedule } from '../utils/calendar-events'

export default function CalendarMobileAgenda() {
  const schedule = getCalendarSchedule()
  const today = new Date()
  today.setHours(12, 0, 0, 0)

  const nextItems = schedule.filter((entry) => entry.endDate >= today)

  return (
    <section className='md:hidden my-8' aria-label='Calendario de aseo en móvil'>
      <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.24)] dark:border-white/5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_35%)]' />
        <div className='relative flex items-end justify-between gap-4'>
          <div>
            <p className='text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-white/55'>
              Calendario
            </p>
            <h3 className='mt-2 text-2xl font-black leading-tight'>
              Turnos de aseo
            </h3>
          </div>
        </div>
      </div>

      <div className='mt-4 max-h-[75vh] space-y-3 overflow-y-auto pr-1'>
        {nextItems.map((entry) => (
          <article
            key={entry.id}
            className={`relative overflow-hidden rounded-[1.5rem] border bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 dark:bg-slate-950/80 ${entry.isCurrent ? 'calendar-mobile-card--current border-slate-900/10 dark:border-white/10' : 'border-slate-200/80 dark:border-slate-800/80'}`}
            style={{ '--calendar-accent': entry.color }}
          >
            <span className='calendar-mobile-card-accent' />

            <div className='relative flex items-center gap-4'>
              <div className='relative shrink-0'>
                <div className='calendar-mobile-date-badge'>
                  <span className='text-[0.65rem] uppercase tracking-[0.35em] text-white/75'>
                    {entry.weekdayLabel}
                  </span>
                  <span className='mt-1 text-xl font-black leading-none'>
                    {String(entry.startDate.getDate()).padStart(2, '0')}
                  </span>
                  <span className='text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-white/70'>
                    {entry.monthName}
                  </span>
                </div>
              </div>

              <div className='min-w-0 flex-1'>
                <div className='flex items-start justify-between gap-3'>
                  <div className='min-w-0'>
                    <p className='text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-slate-500 dark:text-slate-400'>
                      {entry.rangeLabel}
                    </p>
                    <h4 className='mt-1 text-lg font-bold text-slate-900 dark:text-white'>
                      {entry.roomieName}
                    </h4>
                  </div>

                  <span className={`shrink-0 rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.28em] ${entry.isCurrent ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
                    {entry.isCurrent ? 'Hoy' : 'Aseo'}
                  </span>
                </div>

                <div className='mt-3 flex items-center justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={entry.roomieImage}
                      alt={entry.roomieName}
                      loading='lazy'
                      decoding='async'
                      className='size-11 rounded-2xl object-cover object-center shadow-md ring-2 ring-white dark:ring-slate-900'
                    />
                    <div>
                      <p className='text-sm font-semibold text-slate-900 dark:text-white'>
                        {entry.roomieName}
                      </p>
                      <p className='text-xs text-slate-500 dark:text-slate-400'>
                        {entry.isCurrent ? 'Le toca limpiar hoy' : 'Turno programado'}
                      </p>
                    </div>
                  </div>

                  <div
                    className='h-10 w-10 rounded-full border border-white/40 shadow-sm'
                    style={{ backgroundColor: entry.color }}
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
