import Carousel from 'react-bootstrap/Carousel';


//HomePage
function Home() {
  //Creating a Image slideshow as the homepage with some basic info about the application
  //Used bootstrap carousel for the image slideshow
  return (
    <div style={{maxWidth:'600',margin:'auto'}}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg"
          alt="First slide"
          style={{ height: '900px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Add Your meals</h5>
          <p>Add your meals to Your own Recipe book!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/9882202/pexels-photo-9882202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
          style={{ height: '900px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Preperation</h5>
          <p>Never forget Your own recipe!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
          style={{ height: '900px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Calorie Tracker</h5>
          <p>
            Keep track of your Daily calories
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;