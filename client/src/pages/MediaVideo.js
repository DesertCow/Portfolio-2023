


//* Component Import
import Header from '../components/Header';

import React, { useState } from 'react';
import { usePopper } from 'react-popper';

const MediaVideo = () => {

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (

    // <div className="min-vh-100 divMain">

    //   <header className="w-100">
    //     <Header />
    //   </header>

    //   <div className='HeaderSpacer'>
    //     <h1>Media Video</h1>
    //   </div>

    // </div>
    <>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>

  )

}

export default MediaVideo;


//!========================= EOF =========================