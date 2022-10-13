import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (

        <>
            <Navbar />
            {children}

            <Footer />

            {/* so what's happening is that a children prop is passed inside the function between the Navbar and Footer and i believe that using this would allow us to manage all the items inside the Navbar and Footer */}

            {/* next just like in the use of react where we needed to wrap everything inside the provider tag, the app.js is wrapped using the layout component */}

        </>


    );
}

export default Layout;