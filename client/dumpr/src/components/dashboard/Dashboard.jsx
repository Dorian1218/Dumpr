import React from 'react'
import OpenConversation from '../openconversation/OpenConversation'
import SidebarChat from '../sidebarchat/Sidebar'
import { useConversations } from '../../context/ConversationProvider'
import { UserAuth } from '../../context/UserContext'

export function Dashboard({id}) {
  const {selectedConversation} = useConversations()
  const {user} = UserAuth()
  return (
    <div className='d-flex' style={{ height: "100vh", backgroundColor: "white"}}>
      <SidebarChat id={user.uid} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
}