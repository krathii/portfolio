import edu from '../Images/school.jpeg'
import edu2 from '../Images/college.jpg'
import edu3 from '../Images/canara.jpeg'
function Card({Education}){
    const imgfunc=(value)=>{
        if(value==='edu'){
            return edu
        }
        else if(value==='edu2'){
            return edu2
        }
        else if(value==='edu3'){
            return edu3
        }
    }
    return(
        <>
        <div>
        <h1>{Education.H}</h1>
            <p>{Education.p}</p>
            <img src={imgfunc(Education.I)}/></div></>
    );
}
export default Card;