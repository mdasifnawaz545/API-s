import { useEffect, useState } from "react"
import axios from 'axios'
import { useLoaderData } from "react-router-dom";
function githubInfo() {
    let [data, setData] = useState({});
   
    useEffect(() => {
        let gitInfoURL = "https://api.github.com/users/mdasifnawaz545";
        axios.get(gitInfoURL).then((jsonData) => setData((prev) => (prev = jsonData))
        )
    
    }, [])
console.log(data);
    return data;

}

export default githubInfo;

// What is the problem in this specific code.