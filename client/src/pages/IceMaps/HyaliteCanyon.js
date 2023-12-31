//* CSS Import
import "../../css/MediaPages.css";

//* Component Import
import Header from '../../components/Header';
import Footer from '../../components/Footer';


//+++++++++++++++++++ Main Export +++++++++++++++++++
const Blog = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className="col d-flex align-items-center justify-content-center HeaderGallerySpacer">
        <h1 className="my-4 mb-5 p-3 mediaPageTitle">Hyalite Canyon</h1>
      </div>


      <div className="w-100 blogFooterSpacer">
        <Footer />
      </div>

    </div>

  )

}

export default Blog;


//!========================= EOF =========================