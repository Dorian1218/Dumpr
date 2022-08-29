import React from 'react'
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from '../../context/ContactsProvider'
import { UserAuth } from '../../context/UserContext'
import { useConversations } from '../../context/ConversationProvider'
import { db } from '../../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore"

export const conversationCollectionRef = collection(db, "conversations")


export default function NewConversationModal({closeModal}) {
  const { contacts } = useContacts()
  const { createConversations} = useConversations()
  const { user } = UserAuth()
  const [selectedContactID, setSelectedContactID] = useState([])

  const handleCheckboxChange = (contactID) => {
    setSelectedContactID(prevSelectedContactId => {
      if (prevSelectedContactId.includes(contactID)) {
        return prevSelectedContactId.filter(prevID => {
          return contactID !== prevID
        })
      } else {
        return [...prevSelectedContactId, contactID]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createConversations(selectedContactID)
    console.log(selectedContactID)
    closeModal()
  }
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => {
            if (contact.idThatAdded = user.uid) {
              return (
                <Form.Group controlId={contact.id} key={contact.id}>
                  <Form.Check type="checkbox" 
                  value={selectedContactID.includes(contact.id)} 
                  label={contact.name} 
                  onChange={() => handleCheckboxChange(contact.name)}>

                  </Form.Check>
                </Form.Group>
              )
            }
          })}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}