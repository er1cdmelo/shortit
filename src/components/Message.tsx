import '../styles/components/message.sass'

const Message = ({ text, msgtype }: {text: string, msgtype: string}) => {
  return (
    <div id='msg' className={msgtype}>
        <h3>{text}</h3>
    </div>
  )
}

export default Message