const TheirMessage = ({ lastMessage, message }) => {
  let avatarElement = null;
  let messageElement = null;

  if (message.sender && message.sender.username) {
    const isFirstMessageByUser = !lastMessage || (lastMessage.sender && lastMessage.sender.username !== message.sender.username);

    if (isFirstMessageByUser) {
      avatarElement = (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message.sender.avatar})` }}
        />
      );
    }

    if (message.attachments && message.attachments.length > 0) {
      messageElement = (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      );
    } else {
      messageElement = (
        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
          {message.text}
        </div>
      );
    }
  }

  return (
    <div className="message-row">
      {avatarElement}
      {messageElement}
    </div>
  );
};

export default TheirMessage;
