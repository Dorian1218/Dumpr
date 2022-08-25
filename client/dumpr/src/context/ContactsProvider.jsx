import React, { useContext } from 'react'
import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { UserAuth } from './UserContext';
import { useEffect } from 'react';

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([])
  const {user} = UserAuth()
  const contactsCollectionRef = collection(db, "contacts")

  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }]
    })

    addDoc(contactsCollectionRef, {id: id, name: name, idThatAdded: user.uid})
  }

  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(contactsCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getContacts()
  }, [])

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}