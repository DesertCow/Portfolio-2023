


const Footer = () => {

  return (

      <div className="container py-5">
        <div className="col text-center">

          <div className="row d-flex container devLinksBox mt-5">
            <div className="d-flex container flex-row py-3 align-items-center justify-content-around" >
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://github.com/DesertCow">
                  <img src={require('../../img/Icons/github.png')}
                    className=""
                    width="50"
                    alt="GitHub Icon"/>
                </a>
              </div>
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://www.linkedin.com/in/clayton-skaggs-3084b950">
                  <img src={require('../../img/Icons/LinkedIn.png')}
                    className=""
                    width="50"
                    alt="LinkedIn Icon"/> 
                </a> 
              </div>
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://www.instagram.com/skagggggggs/">
                  <img src={require('../../img/Icons/Instagram.png')}
                    className=""
                    width="50"
                    alt="Instagram Icon"/>
                </a>
              </div>
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://www.youtube.com/@MrClaytonskaggs">
                  <img src={require('../../img/Icons/YouTube.png')}
                    className=""
                    width="50"
                    alt="YouTube Icon"/>
                </a>
              </div>

            </div>
          </div>
          <div className="w-100"></div>
        </div>
      </div>

  );


}


export default Footer;

