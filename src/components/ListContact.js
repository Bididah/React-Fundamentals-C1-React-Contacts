import React from 'react'
import Contact from './Contact'

const ListContact = ({contacts}) => {

  
  
  return (
    <div className='list-contacts'>
      {contacts.map(contact => {
    return <Contact  contact={contact} />
  })}
    </div>
  )
}

export default ListContact
