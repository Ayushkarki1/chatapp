import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '733b42b1-599b-40e0-9685-daf309bd14a7', 
    props.user.username, 
    props.user.secret
    );
    return (

     <div style={{height: '100vh'}}>
     <MultiChatSocket {...chatProps}/>
     <MultiChatWindow {...chatProps} style={{heigh:'100%'}}/>
     </div>
     )
  }
  export default ChatsPage;