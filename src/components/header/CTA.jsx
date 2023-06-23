import React from "react";
import CV from "../../assets/vikram_cv1.pdf"

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>
        Resume
      </a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
