import React from 'react'
import List from "./index";
import Form from "./Form";
import { useEffect , useState} from "react";
import '../components/index';



function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname : "Agata" , phone_number: "5547198555" },
    {fullname : "Anna" , phone_number: "5241828528" },
    {fullname : "Yulia" , phone_number: "5812885414" },
    {fullname : "Karolina" , phone_number: "5847156715" }
  ])

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return <div id="container">
    <h1>Contacts</h1>
    <List contacts={contacts} />
    
    <Form addContact={setContacts} contacts={contacts} />
  </div>;
}

export default Contacts;

