import React from 'react';
import './error.sass';

interface ErrorProps {
  text: string
}

export const ErrorComponent: React.FC<ErrorProps> = (props: ErrorProps) => {
  return <div className='error-container'>
    <div className='error-message'>{props.text}</div>
  </div>
}
