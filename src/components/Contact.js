import React from 'react'

const Contact = ({ contact, onClick }) => {
  return (
    <div className='contact-list-item'>
      <img  alt ='avatar' className='contact-avatar' src={`${contact.avatarURL}`} />
        <div className='contact-details'>
          <p>{contact.name}</p>
          <p>{contact.handle}</p>
        </div>
        <button onClick = {() => onClick(contact)} className='contact-remove'> </button>
    </div>
  )
}

export default Contact
