import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const first= () => {
    return ( 

<>
{/* <Navbar/> */}

{/* one thing to note is that after creating the layout component, it is unnecessary to use Navbar and Footer here again as it will repeat again. */}

This is the first interaction between us


{/* <Footer/> */}
{/* for the inclusion of the footer similar processes like changing the name of class to className as well as wrapping the anchor tag using Link was done. While doing so, the anchor tag's href was cut and pasted on Link tag. The footerwas copied from the page source of Bootstrap website for the record.  */}

</>

     );
}
 
export default first ;

