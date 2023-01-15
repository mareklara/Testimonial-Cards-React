// first hook to learn is 'useState'
import { useState } from 'react';
// import App.css
import './App.css';
import Testimonial from './components/Testimonials';
import Photo1 from './images/photo1.jpg'
import Photo2 from './images/photo2.jpg'
import Photo3 from './images/photo3.jpg'
import Button from './components/Button';

// This is a functional component
function App(){
    // variable create. Name = Theme. Initial Value = 'light'
    const [theme, setTheme] = useState('light')

    function onClickFn(){
        if(theme == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    // another example
    // const [number, setNumber] = useState(0)



    return(
        <div className={'main-container ' + theme}>
            <Button
                onClickFn = {onClickFn}
                value = {theme == 'dark' ? 'light' : 'dark'}
                />
            <Testimonial img={Photo1}
                    name={"Maria Lopez"}
                    stars="⭐⭐⭐⭐"
                    text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ex, totam, saepe quibusdam aperiam nam accusamus minima voluptatum voluptas officia id modi quaerat distinctio itaque libero impedit. Veritatis, nobis veniam?"}
                     />
            <Testimonial img={Photo2}
                    name={"Erick Sill"}
                    stars="⭐⭐⭐"
                    text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ex, totam, saepe quibusdam aperiam nam accusamus minima voluptatum voluptas officia id modi quaerat distinctio itaque libero impedit. Veritatis, nobis veniam?"}
                    />
            <Testimonial img={Photo3}
                    name={"Lorena Wi"}
                    stars="⭐⭐⭐⭐⭐"
                    text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ex, totam, saepe quibusdam aperiam nam accusamus minima voluptatum voluptas officia id modi quaerat distinctio itaque libero impedit. Veritatis, nobis veniam?"}
                    />
        </div>

    )
}
// export this files to index.js
export default App;