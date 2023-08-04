import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    const authorLink = "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1750-3-large.jpg?itok=MwEaAU-G";
    const authorPhoto = "https://www.kingarthurbaking.com/sites/default/files/styles/scaled_very_small_250w/public/2019-07/mary-jane-robbins-blog-author.jpg?itok=wkG8pQfZ";
    const authorName = "MaryJane Robbins";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "MaryJane Robbins" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Pierogie Recipe</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (

            <div> 
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
 }

 export default RecipeDescription;