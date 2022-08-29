import React, {useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../../context/ConversationProvider'
import { getDocs } from 'firebase/firestore'
import { conversationCollectionRef } from './NewConversationModal'
import { useState } from 'react'
import { UserAuth } from '../../context/UserContext'

export default function Conversations() {
  const {conversations, selectConversationIndex} = useConversations()
  const {user} = UserAuth()

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => {
        return (
          <ListGroup.Item 
            key={index}
            action
            onClick={() => selectConversationIndex(index)}
            active={conversation.selected}
            >
            {conversation.recipients.map(r => r.name).join(', ')}
          </ListGroup.Item>
        )})}
    </ListGroup>
  )
}