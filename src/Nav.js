import logo from './image/Logo.svg';
import './App.css';

function Nav() {
  return (
    <nav>
      <div class='header'>
        <div class='nav-bar'>
          <div class="nav-left">
 

        <img src={logo} alt="Company Logo" class='icon'></img>
        </div>
        <div class="nav-right">
        <ul >
          <li><a href="home.html">Home</a></li>
          <li><a href="home.html">About</a></li>
          <li><a href="home.html">Menu</a></li>
          <li><a href="#reservation">Reservations</a></li>
          <li><a href="home.html">Order Online</a></li>
          <li><a href="home.html">Login</a></li>
       </ul>
       </div>
       </div>
       </div>

    </nav>
    


  );
}

export default Nav;
