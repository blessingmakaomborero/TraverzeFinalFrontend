import React from 'react';
import Modal from './LoginForm';
import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  if (!localStorage.getItem('username')) return <Modal />;
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
     // userName='makomborero'
			//userSecret='Traverze123'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      height='calc(100vh - 12px)'
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default SupportAdmin;
