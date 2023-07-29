import data from "./../data.json"
import { useState } from "react"



export default function MyProjects () {
    const [index, setIndex] = useState(0);
    // let data = data.projects;

    return (
        <div>
            <button onclick={handleClick}>Next</button>
            <p>Info here{data.projects.sample}</p>
        </div>
    );
//     let data = projects
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

}