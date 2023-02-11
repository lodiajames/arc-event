import Link from 'next/link'
import React from 'react'
import Style from './Button.module.css'

export default function Button(props ) {
  if(props.Link){

    return (
       <Link href={props.Link}className={Style.btn} >
         {props.children}
       </Link>
    )
  }
  return <button className={Style.btn} onClick={props.onClick}>{props.children}</button>
}
