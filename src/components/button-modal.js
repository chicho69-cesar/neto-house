const buttonModal = () => {
  return `
    <button id="open-modal" class="fixed bottom-4 left-4 bg-black dark:bg-white
    text-white dark:text-black py-2 px-4 rounded-xl shadow-lg font-bold
    hover:shadow-none hover:-translate-y-1 transition">
      🙈 <span class="hidden md:inline-block">ver turno<span>
    </button>
  `;
}

export default buttonModal;