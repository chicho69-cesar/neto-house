export default function LinkItem({ children, link }) {
  return (
    <li>
      <a
        href={link}
        className='flex items-center gap-2 px-4 py-2 text-lg font-semibold transition border-2 border-transparent rounded-lg cursor-pointer text-tahiti-800 dark:text-white hover:border-yellow-600 hover:text-yellow-600 dark:hover:text-yellow-400 hover:scale-105'
      >
        {children}
      </a>
    </li>
  )
}
