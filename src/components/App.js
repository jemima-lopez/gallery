import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-images.js";

function App() {
  return (
   
      <div className="App contained">
        <header className="mb-5">
          <h1 className="mt-10 text-center font-bold text-lg mb-10 text-gray-700">
            React App
          </h1>
        </header>
        
        <div className="mt-10 flex justify-center border border-gray-500">
          <ImageGallery items={images}/>
        </div>
      </div>
   
  );
}

export default App;
