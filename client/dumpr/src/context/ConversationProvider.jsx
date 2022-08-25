import React, { useContext, useState, useEffect } from "react"
import { useContacts } from "./ContactsProvider"
import { UserAuth } from "./UserContext"
import { db } from "../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

const ConversationContext = React.createContext()

const conversationCollectionRef = collection(db, "conversations")

export function useConversations() {
  return useContext(ConversationContext)
}

export function ConversationsProvider({ children, id }) {
  const [conversations, setConversations] = useState([])
  const {user} = UserAuth()
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
  const { contacts } = useContacts()

  const createConversations = (recipients) => {
    setConversations(prevConversations => {
      return [...prevConversations, { recipients, messages: [] }]
    })

    addDoc(conversationCollectionRef, {idThatAdded: user.uid, recipients: recipients})
  }

  const addMessageToConversation = ({recipients, text, sender}) => {
    setConversations(prevConversations => {
        let madeChange = false
        const newMessage = {sender, text}

        if (madeChange) {

        } else {
            return [...prevConversations, {recipients, messages: [newMessage]}]
        }
    })
  }

  const sendMessage = (recipients, text) => {
    addMessageToConversation({recipients, text, sender: id})
  }

  useEffect(() => {
    const getConversations = async () => {
      const data = await getDocs(conversationCollectionRef);
      setConversations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getConversations()
  }, [])

  const formattedConversation = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
        const contact = contacts.find(contact => {
            return (contact.id === recipient)
        })
        const name = (contact && contact.name) || recipient
        return {id: recipient , name}
    })
    const selected = index === selectedConversationIndex
    return {...conversation, recipients, selected}
  })

  return (
    <ConversationContext.Provider value={{ conversations: formattedConversation, createConversations, selectConversationIndex: setSelectedConversationIndex, selectedConversation: formattedConversation[selectedConversationIndex], sendMessage}}>
      {children}
    </ConversationContext.Provider>
  )
}


const  arrayEquality = (a, b) => {
    if (a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
}