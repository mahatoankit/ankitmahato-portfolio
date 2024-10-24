import React from 'react';
import resume from '../../assets/Ankit_Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Download Resume
      </a>
      <a href="/contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
