import {  useState } from "react";
import "../css/App.css";
import ListContact from "./ListContact"


const App = () => {
  const deleteContact = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id ))
  }

  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",},
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ])
   
  return <div>
    <ListContact  OnDelete = {deleteContact} contacts = {contacts}/>
  </div>;
};

export default App;
