import React from 'react'
import EventItem from '../events/event-item.js'
import Style from '../events/event-list.module.css'
export default function EventList(props) {
    const {items} = props
  return (
    <ul className={Style.list}>
       {items.map(event=>{
        return(

        
         <EventItem key={event.id} id={event.id} image={event.image} location={event.location} title={event.title} date={event.date}/>
       )})}
    </ul>
  )
}
