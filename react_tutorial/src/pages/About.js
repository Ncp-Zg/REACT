import {useLocation, useHistory} from "react-router"
function About() {
    const location = useLocation();
    const history = useHistory();
    console.log(location)
    console.log(history)

    function goForwardHandle(){
        history.goForward();
    }
    function goBackHandle(){
        history.goBack();
    }
    return(
    <div>
    <div>About</div>
    <div>Location = {location.pathname}</div>
    <div>From = {location.state.from}</div>
    <div>Key = {location.key}</div>
    <button onClick={goForwardHandle}>Go Forward</button>
    <button onClick={goBackHandle}>Go Back</button>
    </div>)
}

export default About