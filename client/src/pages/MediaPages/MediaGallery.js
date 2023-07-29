


//* Component Import
import Header from '../../components/Header';

//* Photo Gallery Package
import PhotoAlbum from "react-photo-album";



const MediaGallery = () => {

  const photos = [
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20210109_173653149-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20211127_142807035-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20211206_140333876-05.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20211228_145549575-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220118_153625058-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220213_014325980.PORTRAIT-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220223_145408512-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220223_191643253-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220223_194919171-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220315_200004961-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220624_121926875-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220808_133447235-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220924_020411721-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230111_174355296-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_185626173-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_192802057-04.jpeg", width: 3024, height: 4032},
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_204538208-03.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_205154483-02.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230114_201026883-01.jpeg", width: 3024, height: 4032},
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230115_141126740-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230118_164014851-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230327_161711677-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230408_174110018-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230409_000547783-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230409_185220636-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230419_185820452-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230421_165124818-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230422_164755640-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230422_231609052-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/Woodz_Selfie.jpeg", width: 4032, height: 3024 }
  ];


  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='HeaderPhotoSpacer' >
        <PhotoAlbum layout="masonry" photos={photos} padding="25"/>
      </div>
      

    </div>

  )

}

export default MediaGallery;


//!========================= EOF =========================