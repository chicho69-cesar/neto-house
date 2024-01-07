import { Suspense, lazy } from 'react'

import Baths from './components/Baths'
import BathsSkeleton from './components/skeletons/BathsSkeleton'
import CalendarSkeleton from './components/skeletons/CalendarSkeleton'
import Header from './components/Header'
import Modal from './components/Modal'
import Turn from './components/Turn'

const LazyCalendar = lazy(() => import('./components/Calendar'))
const LazyBaths = lazy(() => import('./components/Baths'))

export default function App() {
  return (
    <div className='w-full p-4 mx-auto md:w-4/5 md:p-6'>
      <Header />
      <Turn />

      <Suspense fallback={<CalendarSkeleton />}>
        <LazyCalendar />
      </Suspense>

      <Suspense fallback={<BathsSkeleton />}>
        <LazyBaths />
      </Suspense>

      <Modal />
    </div>
  )
}
