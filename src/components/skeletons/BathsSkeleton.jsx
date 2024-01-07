const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export default function BathsSkeleton() {
  return (
    <div className={`${shimmer} relative w-2/3 mx-auto overflow-hidden`}>
      <div className='w-full bg-gray-200 dark:bg-[#2d3c50] h-10 mb-10 rounded-md'></div>

      <BathSkeleton />
      <BathSkeleton isLeft />
      <BathSkeleton />
    </div>
  )
}

function BathSkeleton({ isLeft = false }) {
  return (
    <div className={`flex w-full justify-between mb-10 items-start gap-8 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='bg-gray-200 dark:bg-[#2d3c50] h-48 w-72 rounded'></div>
      <div className='flex'>
        <BubblesSkeleton />
      </div>
    </div>
  )
}

function BubblesSkeleton() {
  const map = {
    0: 'left-0',
    1: '-left-4',
    2: '-left-8',
    3: '-left-12',
  }

  return (
    <>
      {[1, 2, 3, 4].map((roomie, index) => {
        return (
          <div
            key={roomie + index}
            className={`${map[index]} size-24 object-cover object-center rounded-full relative shadow border-4 border-gray-300 dark:border-[#1f2937] hover:-translate-y-2 transition bg-gray-200 dark:bg-[#2d3c50]`}
          />
        )
      })}
    </>
  )
}

