
import { ChatEngine} from "react-chat-engine"
import "./App.css"
import ChatFeed from './components/ChatFeed';
import LoginForm from  "./components/LoginForm"

const projectID="c551396f-8095-42c5-aa72-6ac89159a732";
const App = () => {

    if(!localStorage.getItem("username")) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />

    );
};

export default App;