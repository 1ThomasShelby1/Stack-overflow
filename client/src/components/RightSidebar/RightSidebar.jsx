import React from 'react'
import './RightSidebar.css'
import Wiget from './Widget'
import WigetTags from './WigetTags'

const RightSidebar = () => {
  return (
      <aside className='right-sidebar'>
            <Wiget/>
            <WigetTags/>
      </aside>
  )
}

export default RightSidebar