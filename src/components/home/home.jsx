import Counter from "../counter/counter";
import Message from "../message/message";
import './home.css'

function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <Message text="hi there" description="this is message" />
            <Counter count={0} />
        </div>
    )
}
export default Home;