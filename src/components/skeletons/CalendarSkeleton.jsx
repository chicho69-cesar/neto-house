const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export default function CalendarSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden`}>
      <div className='flex items-center justify-start w-full gap-4'>
        <div className='h-8 mb-4 bg-gray-200 rounded-md dark:bg-[#2d3c50] w-36' />
        <div className='h-8 mb-4 bg-gray-200 rounded-md dark:bg-[#2d3c50] w-24' />
        <div className='h-8 mb-4 mx-16 bg-gray-200 rounded-md dark:bg-[#2d3c50] flex-1' />
        <div className='h-8 mb-4 bg-gray-200 rounded-md dark:bg-[#2d3c50] w-36' />
      </div>
      
      <div className='p-4 bg-gray-200 dark:bg-[#2d3c50] rounded-xl'>
        <div className='mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white/90 dark:bg-[#1f2937] p-4 sm:grid-cols-13 md:gap-4' />

        <div className='flex items-center pt-6 pb-2'>
          <div className='w-5 h-5 bg-gray-300 dark:bg-[#1f2937] rounded-full' />
          <div className='w-20 h-4 ml-2 bg-gray-300 dark:bg-[#1f2937] rounded-md' />
        </div>
      </div>
    </div>
  )
}
