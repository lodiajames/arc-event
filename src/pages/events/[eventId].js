import React, { Fragment } from 'react'
import getAllEvents from 'helpers/api-util'
import { getFeaturedEvents } from 'dummy-data'
import { getEventById } from 'helpers/api-util'
import EventSummary from 'components/event-detail/event-summary'
import EventLogistics from 'components/event-detail/event-logistics'
import EventContent from 'components/event-detail/event-content'
import ErrorAlert from 'components/ui/error-alert/error-alert'
export default function EventDetailPage(props) {

 const event = props.selectedEvent
 if(!event) {
   return 
   <ErrorAlert className='center'>
       <p>Loading....</p>
    </ErrorAlert>
 }
  return (
           <Fragment>
              <EventSummary title={event.title}/>
              <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.imageAlt}  />
              <EventContent>
                  <p>{event.description}</p>
              </EventContent>
           </Fragment>
  )
}

export async function getStaticProps(context){
   const eventId = context.params.eventId

  const event=  await getEventById(eventId);


  return {
   props:{
     selectedEvent: event
   },
   revalidate: 20
  }
}
export async function getStaticPaths(){
 const events = await getFeaturedEvents()

 const paths = events.map(event=> (
   {params: { eventId: event.id}}
 ))

   return{
     paths:paths,
     fallback: 'blocking'
}
}