const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || (message.sender && lastMessage.sender.username !== message.sender.username);
  const senderAvatar = message.sender && message.sender.avatar;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: senderAvatar ? `url(${senderAvatar})` : 'none' }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px'
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
