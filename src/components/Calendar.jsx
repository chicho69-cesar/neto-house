import { Calendar as FullCalendar } from '@fullcalendar/core'
import esLocale from '@fullcalendar/core/locales/es'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useEffect, useRef } from 'react'

import { getCalendarEvents } from '../utils/calendar-events'
import CalendarMobileAgenda from './CalendarMobileAgenda'

function escapeHtml(value) {
  return `${value}`
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export default function Calendar() {
  const calendarRef = useRef(null)

  useEffect(() => {
    const calendarEl = calendarRef.current

    if (!calendarEl) {
      return undefined
    }

    const calendar = new FullCalendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      locale: esLocale,
      buttonText: {
        dayGridMonth: 'mes',
        timeGridWeek: 'semana',
        timeGridDay: 'dia',
        listWeek: 'agenda'
      },
      navLinks: true,
      dayMaxEvents: 3,
      expandRows: true,
      height: 'auto',
      events: getCalendarEvents(),
      eventClassNames(arg) {
        return arg.event.extendedProps.isCurrent ? ['calendar-event--current'] : []
      },
      eventContent(arg) {
        const roomieName = escapeHtml(arg.event.extendedProps.roomieName)
        const rangeLabel = escapeHtml(arg.event.extendedProps.rangeLabel)
        const weekdayLabel = escapeHtml(arg.event.extendedProps.weekdayLabel)
        const roomieImage = escapeHtml(arg.event.extendedProps.roomieImage)
        const isCurrent = arg.event.extendedProps.isCurrent

        return {
          html: `
            <div class="calendar-event-card">
              <div class="calendar-event-card__accent"></div>
              <img class="calendar-event-card__avatar" src="${roomieImage}" alt="${roomieName}" loading="lazy" decoding="async" />
              <div class="calendar-event-card__body">
                <div class="calendar-event-card__header">
                  <span class="calendar-event-card__title">${roomieName}</span>
                  ${isCurrent ? '<span class="calendar-event-card__badge">Hoy</span>' : ''}
                </div>
                <span class="calendar-event-card__meta">${weekdayLabel} · ${rangeLabel}</span>
              </div>
            </div>
          `
        }
      }
    })

    calendar.render()

    return () => {
      calendar.destroy()
    }
  }, [])

  return (
    <section id='kitchen' className='scroll-mt-24'>
      <div className='hidden md:block'>
        <div ref={calendarRef} className='calendar-desktop pt-6 my-16' />
      </div>

      <CalendarMobileAgenda />
    </section>
  )
}
