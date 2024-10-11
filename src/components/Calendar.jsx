import { useEffect } from 'react'
import { Calendar as FullCalendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import esLocale from '@fullcalendar/core/locales/es';

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
        locale: esLocale,
        navLinks: true, 
        dayMaxEvents: true,
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
