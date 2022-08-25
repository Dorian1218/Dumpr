import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../../context/ContactsProvider'
import { UserAuth } from '../../context/UserContext'

export default function Contacts() {
  const { contacts } = useContacts()
  const {user} = UserAuth()
  console.log(contacts)

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => {
          if (contact.idThatAdded === user.uid) {
            return (
              <ListGroup.Item key={contact.id}>
                {contact.name}
              </ListGroup.Item>
            )
          } else {
            return
          }
        })}
    </ListGroup>
  )
}