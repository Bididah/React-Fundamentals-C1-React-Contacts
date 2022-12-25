import React from 'react'
import Contact from './Contact'

const ListContact = ({contacts , OnDelete}) => {

  
  
  return (
    <div className='list-contacts'>
      {contacts.map(contact => {
    return <Contact key={contact.id} onClick={OnDelete}  contact={contact} />
  })}
    </div>
  )
}

export default ListContact
