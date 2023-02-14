import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import ErrorAlert from 'components/ui/error-alert/error-alert';
import useSWR from 'swr';
import EventList from 'components/events/event-list';
import ResultsTitle from 'components/events/results-title/results-title';
import Button from 'components/ui/Button';
import { getFilteredEvents } from 'helpers/api-util';

export default function FilteredEventsPage(props) {

  const router = useRouter()
  const filteredData = router.query.slug;
  if(!filteredData){
    return <p className='center'>Loading ...</p>
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1]

  const numYear=+filteredYear
  const numMonth=+filteredMonth

   if(props.hasError){

   
  return (
         <Fragment>
          <div className='center'>
          <ErrorAlert>
          <p>Oops! Invalid search. Please correct your search</p>

          </ErrorAlert>
          </div>
         </Fragment>
  );
  }


  const filteredEvents = props.events;

  if(!filteredEvents || filteredEvents.length ===0){
    return  <Fragment>
      <ErrorAlert>
      <p> Sorry! No Events Found </p>
      </ErrorAlert>
     
    <div className='center'>
    <Button Link='/events'>Show All Events</Button>
    </div>
    </Fragment>
  }

  const date = new Date(props.date.year ,props.date.month -1);
  return (
    <Fragment>
      <ResultsTitle date={date}/>
       <EventList items={filteredEvents}/>
        </Fragment>
  )
}

export async function getServerSideProps(context){
  const {params} = context

const filteredData = params.slug

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1]

  const numYear=+filteredYear
  const numMonth=+filteredMonth

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12 ){
       return {
        props: {hasError: true}
        
       }
      
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  })




  return {
    props: {
      events: filteredEvents,
      date:{
        year: numYear,
        month: numMonth
      }
    }
  }
}