const RecipeAuthor = () => {
   const authorLink = "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1750-3-large.jpg?itok=MwEaAU-G";
   const authorPhoto = "https://www.kingarthurbaking.com/sites/default/files/styles/scaled_very_small_250w/public/2019-07/mary-jane-robbins-blog-author.jpg?itok=wkG8pQfZ";
   const authorName = "MaryJane Robbins";

   return (
      <div>
         <img src={authorPhoto} alt = "MaryJane Robbins" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["potatoes", "cheddar cheese", "butter", "onions", " dough"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Pierogies</h1>
            <p>Tasty mashed potato dumplings.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
   
}