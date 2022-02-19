import React from 'react'

interface Props {
  message: string | undefined
}

export const ValidationError = ({ message }: Props) => (
  <span className='validation-error'>{message}</span>
)
