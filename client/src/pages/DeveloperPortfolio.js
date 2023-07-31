


//* Component Import
import Header from '../components/Header';



const Portfolio = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='HeaderSpacer'>
        
        <div className="py-5">
          <div class="container text-center portfolioMainBox">
            <div class="row">
              <div class="col portfioloDemoBox">col 1-1</div>
              <div class="col mt-5">col 1-2</div>
            </div>
            <div class="row">
              <div class="col portfioloDemoBox">col 2-1</div>
              <div class="col mt-5">col 2-2</div>
            </div>
          </div>
        </div>



      <div class="mt-5 container d-flex lex-column align-items-center justify-content-center">
        <div class="row mt-5">
          <div class="col mx-5 programLanguagesBox">
            <div class="mt-4 text-center languagesListTitle">
              Current
            </div>
            <div class="text-center languagesListTitle">
              Languages/Tools
            </div>
            <ul className="mt-4 mx-5 px-3 text-left languagesList">
              <li className="mt-3">&#9642; Javascript</li>
              <li className="mt-3">&#9642; HTML + CSS</li>
              <li className="mt-3">&#9642; React </li>
              <li className="mt-3">&#9642; Node.js</li>
              <li className="mt-3">&#9642; SQL + MongoDB</li>
              <li className="mt-3">&#9642; React Native</li>
              <li className="mt-3">&#9642; AWS</li>
              <li className="mt-3">&#9642; FreeCAD</li>
            </ul>
          </div>
          <div class="col mx-5 programLanguagesBox2">
            <div class="mt-4 text-center languagesListTitle">
              Previous
            </div>
            <div class="text-center languagesListTitle">
              Languages/Tools
            </div>
            <ul className="mt-4 mx-5 text-left languagesList ">
              <li className="mt-3">&#9642; Verilog/VHDL</li>
              <li className="mt-3">&#9642; ATL (Advantest Language)</li>
              <li className="mt-3">&#9642; Java</li>
              <li className="mt-3">&#9642; C</li>
              <li className="mt-3">&#9642; BASH/Shell</li>
              <li className="mt-3">&#9642; Batch Script</li>
              <li className="mt-3">&#9642; Perl</li>
              <li className="mt-3">&#9642; Python</li>
            </ul>
          </div>
        </div>
      </div>



      </div>

    </div>

  )

}

export default Portfolio;


//!========================= EOF =========================