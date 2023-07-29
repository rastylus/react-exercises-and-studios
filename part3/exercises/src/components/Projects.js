import data from "./../data.json"
import { useState } from "react"



export default function MyProjects () {
    const [index, setIndex] = useState(0);
    let samp = data.projects;
    // let group = projects[index];

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            {/* <p>Info here{samp.sample}</p> */}
            <br></br>
            <br></br>
                <h4>Original Sample</h4>
                    <p>{`${samp[index].sample}`}</p>
                    <img src={samp[index].samplePhoto}/>
                <br></br>
                <br></br>
                <h4>Sampled By</h4>
                    <p>{`${samp[index].flipper}`}</p>
                    <p>{`${samp[index].song}`}</p>
                <img src={samp[index].songPhoto}/>
            {/* <p>{`${samp[index].sample}`}</p> */}
            {/* {JSON.stringify(samp[index])} */}
        </div>
    );
//     let data = projects
    function handleClick() {
        // console.log("test")
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

// export default function MyProjects () {


    //     console.log(data.projects[1]);
      
    //     return (
    //       <div>
    //         {/* {data.projects} */}
    //         <p>{JSON.stringify(data.projects[0])}</p>
    //       </div>
    //     );
      
    //   };