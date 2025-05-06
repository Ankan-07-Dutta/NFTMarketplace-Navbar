import React from 'react'
import Link from 'next/link'

//INTERNAL IMPORT
import Style from './HeplCenter.module.css'

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link : "about",
    },
    {
      name: "Contact Us",
      link : "contact-us",
    },
    {
      name: "Sign Up",
      link : "sign-up",
    },
    {
      name: "Sign In",
      link : "sign-in",
    },
    {
      name: "Subscription",
      link : "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {
        helpCenter.map((element, i)=> (
          <div key={i+1} className={Style.helpCenter}>
            <Link href={{pathname: `${element.link}`}}>
              {element.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter
