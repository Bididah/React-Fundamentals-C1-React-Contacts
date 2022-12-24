import React from 'react'

const Contact = ({ contact }) => {
  return (
    <div className='contact-list-item' key={contact.id} >
      <img className='contact-avatar' src={`${contact.avatarURL}`} />
        <div className='contact-details'>
          <p>{contact.name}</p>
          <p>{contact.handle}</p>
        </div>
        <button className='contact-remove'> </button>
    </div>
  )
}

export default Contact
