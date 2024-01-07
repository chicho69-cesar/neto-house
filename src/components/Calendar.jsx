import { useEffect } from 'react'
import { Calendar as FullCalendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

import { getCalendarEvents } from '../utils/calendar-events'

export default function Calendar() {
  useEffect(() => {
    var calendarEl = document.getElementById('calendar')

    if (calendarEl) {
      let calendar = new FullCalendar(calendarEl, {
        plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        locale: 'es',
        navLinks: true, // can click day/week names to navigate views
        dayMaxEvents: true, // allow "more" link when too many events
        events: getCalendarEvents()
      })
    
      calendar.render()
    }
  }, [])

  return (
    <div id='kitchen'>
      <div id='calendar' className='pt-6 my-16'></div>
    </div>
  )
}
