// Random jokes from an API Using react.
import { useEffect, useState } from "react"

export default function Jokes(){
  let URL="https://official-joke-api.appspot.com/random_joke";
  let [joke,setjoke]=useState({type:"",setup:"",punchline:"",id:""});
  let handleJokes=async(event)=>{
    event.preventDefault();
    let res= await fetch(URL);
    let joke= await res.json();
    console.log(joke);  
    setjoke({type:joke.type,setup:joke.setup,punchline:joke.punchline,id:joke.id});

  }

  useEffect(()=>{
    async function getJokes(){
        let res=await fetch(URL);
        let resJSON=await res.json();
        setjoke({type:resJSON.type,setup:resJSON.setup,punchline:resJSON.punchline,id:resJSON.id})
    }
    getJokes();
  },[]);

  return(

    <>
    <form onSubmit={handleJokes}>
    <button>Get Jokes</button>
    </form>
    <p>Joke : {joke.setup}</p>
    <p>Punchline : {joke.punchline}</p>
    </>



  )
}



