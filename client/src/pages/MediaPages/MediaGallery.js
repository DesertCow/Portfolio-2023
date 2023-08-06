
import { useState } from "react";

//* Component Import
import Header from '../../components/Header';
import photoList from './PhotoList'

//* Photo Gallery Package
import PhotoAlbum from "react-photo-album";

//* Import Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const MediaGallery = () => {

  const [index, setIndex] = useState(-1);

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className="col d-flex align-items-center justify-content-center HeaderGallerySpacer">
        <h1 className="my-4 mb-5 p-3 aboutMeTitle ">Photo Gallery</h1>
      </div>

      <div className='' >
        <PhotoAlbum layout="rows" photos={photoList} padding="25" targetRowHeight={350} onClick={({ index }) => setIndex(index)}/>

        <Lightbox
          slides={photoList}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>

    </div>
  )
}

export default MediaGallery;


//!========================= EOF =========================