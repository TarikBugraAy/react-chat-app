const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || (message.sender && lastMessage.sender.username !== message.sender.username);

  return (
    <div className="message-row">
      {isFirstMessageByUser && message.sender && message.sender.username && ( // Add null checks for message.sender and message.sender.username
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
    </div>
  );
};

export default TheirMessage;
