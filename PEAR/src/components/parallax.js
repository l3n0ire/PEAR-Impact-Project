import React from 'react'
import img_parallax from "../images/img_parallax.jpg"

const Parallax = () => {
    return (
       


        <div style ={{
             /* The image used */
            backgroundImage: 'url("https://azharlaher.com/wp-content/uploads/2019/10/img-3298_orig.jpg")',

            /* Full height */
            height: '70vh',

            /* Create the parallax scrolling effect */
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        }}>
            
        </div>
    );
}
export default Parallax
