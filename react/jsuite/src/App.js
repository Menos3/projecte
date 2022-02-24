import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Ticket from './Tickets/Ticket'


const App = () => {
  return (
    <>
      <div><Header/></div>
      <div><Body/></div>
      <div><Footer/></div>
      <div><Ticket/></div>
    </>
  )
}

export default App