import {useState} from 'react'



function SignUpForm (){

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit(event){
    event.preventDefault()
    try{
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: "POST",
        body: JSON.stringify({username}),
        body: JSON.stringify({password}),
    });
    const result = await response.json();
    console.log(result);
    }

    catch(error) {
        setError(error.message)
    }
}

return(
    <>

    <h2> Sign Up </h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label> Username:{" "}
            <input value={username} onChange={(event)=>{
                setUsername(event.target.value)
            }}/>
        </label>
        <br></br>
        <label>Password:
            <input type="password" value={password} onChange={(event)=>{
                setPassword(event.target.value)
            }}/>
        </label>
        <br/>
        <button type="submit">Submit</button>
    </form>
    
    </>
)
}

export default SignUpForm