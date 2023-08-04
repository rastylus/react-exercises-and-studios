let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  // console.log(props)
  // function GiveRating(props) {
  //   return <h3>{stars[props.rating - 1]}</h3>;
  // }
  return stars[props.rating -1];
}

export default RateARecipe;


//conditional to render stars based on a number provided in App.js 
