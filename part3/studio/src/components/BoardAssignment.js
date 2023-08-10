import React, { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState("no boards yet");
   const boards = [
      {label: "none", value: "zero"},
      {label: "Board One", value: "one"},
      {label: "Board Two", value: "two"},
      {label: "Board Three", value: "three"}
   ];
   // console.log(boards[1].label);

   const handleChange = (event) => {
      setName(event.target.value);
   }

   // const recipeAuthor = recipedata.map((data) =>
   // <div key={data.name}>{data.author}</div>
   // )

   //   console.log(boardName);
   const displayBoardNames = boards.map((data) => <option key={data.value}>{data.label}</option> )
   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {displayBoardNames}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}