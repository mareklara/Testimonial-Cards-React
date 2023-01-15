import './Testimonial.css'
// import Photo1 from '../images/photo1.jpg'


// function Testimonial(props){
//     return(
//         <div className="Testimonial__container">
//             <div>
//                 <img className="Testimonial__photo" src={props.img} alt="photo profile"></img>
//                 <h2 className="Testimonial__name">{props.name}</h2>
//             </div>
//             <div className='Testimonial__content'>
//                 <p className="Testimonial__star">{props.stars}</p>
//                 <p className='Testimonial__text'>{props.text}
//                 </p>
//             </div>
//         </div>
//     )
// }

// Option 2 Destructuring
function Testimonial({img, name, stars, text}){
    return(
        <div className="Testimonial__container">
            <div>
                <img className="Testimonial__photo" src={img} alt="photo profile"></img>
                <h2 className="Testimonial__name">{name}</h2>
            </div>
            <div className='Testimonial__content'>
                <p className="Testimonial__star">{stars}</p>
                <p className='Testimonial__text'>{text}
                </p>
            </div>
        </div>
    )
}

// ezxport this function
export default Testimonial;