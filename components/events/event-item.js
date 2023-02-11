
import React from 'react'
import Style from './event-item.module.css'
import Button from 'components/ui/Button';
import DateIcon from 'components/icons/date-icon';
import AddressIcon from 'components/icons/address-icon';
import ArrowRightIcon from 'components/icons/arrow-right-icon';

export default function EventItem (props) {
    const {title, image, date, location, id} = props;
    const humanDate = new Date(date).toLocaleDateString('en-us', {
        day:'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formatedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`;
  return (
      <li className={Style.item}>
        <img className='' src={'/' + image } alt={title}/>
        <div className={Style.content}>
            <div className={Style.summary}>
                <h2>{title}</h2>
             <div className={Style.date}>
                <DateIcon/>
                <time>{humanDate}</time>
               </div>
               <div className={Style.address}>
                <AddressIcon/>
                <address>{formatedAddress}</address>
              </div>
            </div>
            <div className={Style.actions}>
                
                  <Button Link={exploreLink}>
                    <span>Explore Events</span>
                    <span className={Style.icon}>
                       <ArrowRightIcon/>
                        </span></Button>
            </div>
           
            
        </div>
      </li>
  )
}
