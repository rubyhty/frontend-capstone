import './App.css';
import food from './image/food.jpg';
import salad from './image/salad.jpg';
import bruchetta from './image/bruchetta.svg';
import dessert from './image/dessert.jpg';
import basket from './image/basket.svg';
import BookingForm from './BookingForm';


function Main() {
  const availableTimes = ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

  const handleSubmit = (bookingData) => {
    console.log('Booking data:', bookingData);
  };

  return (
    <main>
      <div class='banner-bg'>
      <div class='banner-inner'>
      <div class='banner-left'>
      <div class='banner-text'>  <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Reserve a Table</button></div>
      
      
 
        
        </div>
        <div class='banner-right'><img src={food}></img></div>
        </div>

      </div>
      <div class='main-lower'>
      <div class='banner-special'>
        This weeks specials! 
        <button>Online Menu</button>
      </div></div>

      <div class='content-bg'>
        <div class='content-main'>

        <article>
          <img src={salad}></img>
          <div class='text-box'>
            <div class='topic-line'><h1>Greek salad</h1><h2>$12.99</h2></div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div class='order-line'>
              Order a delivery
              <img src={basket}></img>
            </div>
          </div>
      </article>


      
      <article>
          <img src={bruchetta}></img>
          <div class='text-box'>
            <div class='topic-line'><h1>Bruchetta</h1><h2>$12.99</h2></div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div class='order-line'>
              Order a delivery
              <img src={basket}></img>
            </div>
          </div>
      </article>

      <article>
          <img src={dessert}></img>
          <div class='text-box'>
            <div class='topic-line'><h1>Lemon Dessert</h1><h2>$12.99</h2></div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div class='order-line'>
              Order a delivery
              <img src={basket}></img>
            </div>
          </div>
      </article>

    
   

      </div></div>
      <div>
      
      <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />
    </div>

      
      
    </main>


  );
}

export default Main;
