import React from 'react'
import Contact from './Contact'
import propTypes  from 'prop-types'

const ListContact = ({contacts , OnDelete}) => {

  
  
  return (
    <div className='list-contacts'>
      {contacts.map(contact => {
    return <Contact key={contact.id} onClick={OnDelete}  contact={contact} />
  })}
    </div>
  )
}

ListContact.propTypes = {
  contacts : propTypes.array.isRequired,
  OnDelete : propTypes.func.isRequired
}

export default ListContact
