import './Navbar.css'


const navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <p className='logo-p'>YanaDusha</p>
        </div>
        <div className="nav-items">
            <ul className='nav-menu'>
                <li>SHOP<hr></hr></li>
                <li>FALL 2024</li>
                <li>ABOUT</li>
            </ul>
          </div>
          
          <div className="nav-rigth-container">  
            <div className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </button>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item" href="#">FR</a></li>
                <li><a className="dropdown-item" href="#">UA</a></li>
                <li><a className="dropdown-item" href="#">RU</a></li>
              </ul>
            </div>
              
          
            <div className="nav-bag">
              <p>BAG</p>
            </div>
          </div>
    </div>
  )
}

export default navbar