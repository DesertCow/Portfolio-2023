


//* Component Import
import Header from '../../components/Header';



const MediaGallery = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='d-flex flex-column min-vh-100 align-items-center justify-content-center HeaderSpacer' >
        <img src={require("../../img/PhotoGallery/Woodz_Selfie.jpeg")}
          className="align-items-center justify-content-center homePageMainPhoto"
          alt="Clayton Skaggs Snowy Woods"/>  
      </div>

    </div>

  )

}

export default MediaGallery;


//!========================= EOF =========================