import data from "./../data.json"
import { useState } from "react"
import "./Project.module.css"

export default function MyProjects () {
    const [index, setIndex] = useState(0);
    let samp = data.projects;
    // let group = projects[index];

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <section>
                <br></br>
                <table>
                    <tr>
                        <th>Orignal Sample</th>
                        <th>Sampled By</th>
                    </tr>
                    <tr>
                        <td><img src={samp[index].samplePhoto} /></td>
                        <td><img src={samp[index].songPhoto} /> </td>
                    </tr>
                    <tr>
                        <td>{`${samp[index].artist}`}</td>
                        <td>{`${samp[index].flipper}`}</td>
                    </tr>
                    <tr>
                        <td>{`${samp[index].sample}`}</td>

                        <td>{`${samp[index].song}`}</td>
                    </tr>
                </table>
                {/* {JSON.stringify(samp[index])} */}  
            </section>
        </div>
    );

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