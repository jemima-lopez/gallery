import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-images.js";

function App() {
  return (
    <div className="App contained">
      <header className="mb-5">
        <h1 className="mt-10 text-center font-bold text-5xl mb-10 text-gray-400">
          GALLERY
        </h1>
      </header>

      <div className="mt-10 p-3 flex justify-center border-1 rounded-sm shadow-lg transition-transform transform hover:scale-105">
        <ImageGallery
          items={images}
          renderThumbInner={(item) => (
            <div className="flex items-center justify-center">
              <img
                src={item.thumbnail}
                className="rounded-lg border-2 border-gray-300 transition-all hover:border-gray-700 hover:scale-110"
              ></img>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default App;
