import React from "react"

function Home() {
        return (
            <div className="Home">
                <h1>Welcome to the React</h1>
                <div className="homediv">
                    <div>
                        <h1>Home</h1>
                        <ul>
                            <li>Provide a basic concept of <b>JSX</b> & <b>React Components</b>.</li>
                            <li>Implementation of <b>Routing</b> in React using react-router-dom.</li>
                            <li style={{color:"red"}}>Inline CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Cards</h1>
                        <ul>
                            <li>Learn about <b>Props</b>.</li>
                            <li>Implementation of <b>map function</b> .</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Increment</h1>
                        <ul>
                            <li>Provide a basic concept <b>Hooks</b></li>
                            <li>Implementation of <b>useState</b> for number(state) change.</li>
                            <li>Implementation of <b>useEffect</b> for Conditional CSS Change.</li>
                        </ul>
                    </div>
                    <div>
                        <h1>To-Do List</h1>
                        <ul>
                            <li>Implementation of <b>Local Storage</b> & <b>Date Object</b> in react using hook useEffect..</li>
                            <li>dealing with Form Data.</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Dynamic Routing</h1>
                        <ul>
                            <li>Basics of <b>Dynamic Routing</b>.</li>
                            <li><b>Fetching JSON</b> file.</li>
                            <li><b>Rendering Image</b> from <b>BASE64</b> Encoding.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }

export default Home;