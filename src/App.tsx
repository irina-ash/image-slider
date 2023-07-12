import {memo} from 'react';
import ImageSlider from './components/ImageSlider';
import { mockImages } from './components/ImageSlider/constants';

function App() {
  return (
    <div>
      <p>Desktop</p>
      <ImageSlider items={mockImages} />

      <p>Mobile</p>
      <ImageSlider isMobile items={mockImages} />
    </div>
  );
}

export default memo(App);
