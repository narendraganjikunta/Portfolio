import narru from '../Assets/narendra.jpeg';
import { Link } from 'react-router-dom'
import Content from './Content';
function Profile() {
    return (
       
<>
<header className="container mainhead">
            <div className="row ">
            <nav class="navbar navbar-expand-lg rounded navbar-light bg-warning text-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfFdSIa7MOcUWEY4ZmvtZVTrsajvC4r0SmA&usqp=CAU" className='w-25 rounded-2' alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" ><Link to="/HOME">HOME</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" target="_blank"><Link to="./About">ABOUT</Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  "><Link to="./CONTACT">PROJECT</Link></a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        </header>
<Content/>
</>
    )
}

export default Profile
