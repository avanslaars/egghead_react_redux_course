import React from 'react'

const Message = ({message}) => (
  message
    ? <span className='message'>{message}</span>
    : null
)

export default Message
