export default function OpenModal({ onOpenModal }) {
  return (
    <button
      className='fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full border border-black/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-white dark:text-slate-950'
      onClick={onOpenModal}
    >
      <span className='grid size-8 place-items-center rounded-full bg-white/10 text-base dark:bg-slate-950/10'>
        🙈
      </span>
      <span className='hidden md:inline-block'>ver turno</span>
    </button>
  )
}
