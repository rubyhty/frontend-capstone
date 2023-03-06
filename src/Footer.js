import './App.css';
import logo_footer from './image/logo_footer.png';

function Footer() {
  return (
    <div class='footer-bg'>
     <div class='footer-content'>
      <div class='footer-left'>
        <h3>Contact us</h3>
        <p>Phone: (123)-456-789</p>
        <p>Email: littlelemon@littlelemon.com</p>
        <p>Address: New town, CA</p>
      </div>
      <div class='footer-right'>
        <img src={logo_footer}></img>
      </div>
     </div>
    </div>
    


  );
}

export default Footer;
