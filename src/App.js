
import { ChatEngine} from "react-chat-engine"
import "./App.css"
import ChatFeed from './components/ChatFeed';

const projectID="c551396f-8095-42c5-aa72-6ac89159a732";
const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName="Logar Komutanoglu"
            userSecret="logar"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
 
        />

    );
};

export default App;