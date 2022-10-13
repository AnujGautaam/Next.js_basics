import Head  from "next/head";
import Link from "next/link"
const Navbar = () => {
  return (
    <>
      <Head>
        {/* for pasting the cdn link of bootstrap */}

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      </Head>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="#"><a className="navbar-brand">Navbar</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#"><a className="nav-link active" aria-current="page">Home</a></Link>
              </li>
              <li className="nav-item">
                <Link href="#"><a className="nav-link" >Link</a></Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="#"><a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a></Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link href="#"><a className="dropdown-item">Action</a></Link></li>
                  <li><Link href="#"><a className="dropdown-item">Another action</a></Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link href="#"><a className="dropdown-item">Something else here</a></Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="#"><a className="nav-link disabled">Disabled</a></Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>

  );
}

export default Navbar;