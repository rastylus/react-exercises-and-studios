import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h2>Fun Facts</h2>
         <ol>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         <Button />

         </ol>
   </div>
   );


function Profile()
{
   return(
      <ul>
         
         {listItem}
      </ul>
   );
}

export default Profile;
