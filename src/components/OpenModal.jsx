export default function OpenModal({ onOpenModal }) {
  return (
    <button
      className='fixed px-4 py-2 font-bold text-white transition bg-black shadow-lg bottom-4 left-4 dark:bg-white dark:text-black rounded-xl hover:shadow-none hover:-translate-y-1'
      onClick={onOpenModal}
    >
      🙈 <span className='hidden md:inline-block'>ver turno</span>
    </button>
  )
}
