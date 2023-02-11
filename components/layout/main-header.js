import Link from 'next/link'
import React from 'react'
import Style from './main-header.module.css'
export default function MainHeader() {
     return(
           <header className={Style.header}>
             <div className={Style.logo}>
                    <Link href='/'>NextEvent</Link>
             </div>
             <nav className={Style.navigation}>
                 <ul>
                     <li>
                        <Link href='/events'>Browse All events</Link>
                     </li>
                 </ul>
             </nav>
           </header>
     
  )
}
