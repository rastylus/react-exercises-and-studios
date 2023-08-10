import { useState } from 'react';

export default function StatusChange () {

   // const defaultNote = {
   //    text: '',
   //    tried: false
   // }

   // const [note, setNote] = useState(defaultNote)
   // const [notes, setNotes] = useState([]);
   const [notes, setNotes] = useState("");

   // console.log("🚀 ~ file: StatusChange.js:5 ~ StatusChange ~ note:", note)
   // console.log("🚀 ~ file: StatusChange.js:7 ~ StatusChange ~ notes:", notes)
   const [recipeStatus, setRecipeStatus] = useState(false);


   const handleChange = (event) => {
      // setNote({...note, text: event.target.value})
      setNotes(event.target.value)
   }
   
   const handleSubmit = (event) => {
      event.preventDefault();

      // setNotes([...notes, event.target.value])

      const recipeStatus = setRecipeStatus(true);
      document.getElementById("notes").innerHTML = `${notes}`;
      document.getElementById("try").innerHTML = "I have tried this recipe!";

      // document.getElementById("notes").innerHTML += `${notes}`;
      // console.log(setNotes);
      // console.log(<recipeTried />);
      // console.log(recipeStatus);
   }

   // Update the HTML in the return statement so that it uses the value of notes and displays a different message if recipeStatus is true.
   // const notTried = "I have not tried this recipe!";
   // const tried = "I have tried this recipe!";

   // function NotTried() {
   //    return <p>I have not tried this recipe!</p>
   // }
   // const NotTried = () => <p>I have not tried this recipe!</p>
   // const Tried = () =>  <p>I have tried this recipe!</p>;


   // const displayMessage = (status) => {
   //    if (status === 'empty') {
   //      return <p id="notes">My Recipe Notes aren't here!</p>
   //    } else if {
   //          ///
            
   //    } else {
   //       return <p id="try">I have not tried this recipe!</p>

   //    }
   // }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit"/>
         </form>

         <p id="notes">My Recipe Notes aren't here!</p>

         <p id="try">I have not tried this recipe!</p>


{/* {notes} */}
         {/* <ul>
            {notes.map((note) => {
               return (
                  <li>{notes.text}</li>
               )
            })}
         </ul> */}

         {/* <p>{recipeTried ? <Tried /> : <NotTried />; }</p> */}

         {/* recipeTried ? <Tried /> : <NotTried />; */}
          {/* ? <p><NotTried /></p> 
          : <p><Tried /></p>  */}
      
         {/* {(recipeStatus === false) ? <NotTried /> : <Tried />;} */}


      </div>
   );
}