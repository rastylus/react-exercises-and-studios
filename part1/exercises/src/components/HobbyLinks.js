import classes from './HobbyLinks.module.css';

export default function HobbyLinks () {
    const hobbyLinks = ["https://op1.fun/", "https://www.youtube.com/"]
    return (
        <div className={classes.hobbyDiv}>
        <br></br>
        <a href = {hobbyLinks[0]}>OP-1 patches</a>
        <br></br>
        <a href = {hobbyLinks[1]}>YouTube</a>
        </div>
    );
 }