import Link from "next/link";

const Footer = () => {
    return ( 
    
    <>
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

    <Link href="/"><a  className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </a></Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link href="#"><a  className="nav-link px-2 text-muted">Home</a></Link></li>
      <li className="nav-item"><Link href="#"><a  className="nav-link px-2 text-muted">Features</a></Link></li>
      <li className="nav-item"><Link href="#"><a  className="nav-link px-2 text-muted">Pricing</a></Link></li>
      <li className="nav-item"><Link href="#"><a  className="nav-link px-2 text-muted">FAQs</a></Link></li>
      <li className="nav-item"><Link href="#"><a  className="nav-link px-2 text-muted">About</a></Link></li>
    </ul>
  </footer>
</div>
    
    
    
    
    
    
    </>
    
    
    
    );
}
 
export default Footer;