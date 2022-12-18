import React from 'react'

const ListContact = ({contacts}) => {

  
  
  return (
    <ol className='list-contacts'>
      {contacts.map(contact => {
    return <li key = {contact.id}>{contact.name}</li>
  })}
    </ol>
  )
}

export default ListContact
