import { useState } from 'react';
import { Carousel } from './Carousel';
import SlickCarousel from './SlickCarousel';

const App = () => {
  // const [slides,setSlides] = useState(data)
  return (
    <main>
      {/* <Carousel/> */}
      <SlickCarousel/>
    </main>
  );
};
export default App;
