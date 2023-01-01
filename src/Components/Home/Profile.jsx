import './Profile.css'
import narru from '../Assets/narendra.jpeg';
import { Link } from 'react-router-dom'
function Profile() {
    return (
        <div className='profile-container'>
            <div className='links'>
                <h1 className='name'>G.NARENDRA</h1>
                <div >
                    <ul className="nav-links">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/About" >About</Link></li>
                        <li><Link to="/Contact" >skills</Link></li>
                    </ul>
                </div>
            </div>
            <div className="detailes">
                <div className='social-links'>
                    <ul>
                        <li><a><i class="fab fa-github"></i></a></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class='fab fa-youtube'></i></li>
                        <li><i class='fab fa-instagram'></i></li>
                        <li><i class='fab fa-facebook-f'></i></li>
                    </ul>

                </div >
                <div className="detailes2">
                    <h2>Hello ,I'M <span>NARENDRA</span></h2>
                    <h2>UI DEVELOPER</h2>
                </div>
                <div className='image'>
                    <img src={narru} />
                </div>

            </div>
            <div className='wave'>

            </div>
            <div className='wave2'>

            </div>

        </div>
    )
}

export default Profile
