import avatar from '../../assets/Ava.jpg';
import mail from '../../assets/mail.png';
import cv from '../../assets/cv.png';
import lin from '../../assets/in.png';
import cvpdf from '../../assets/Eugene_Pashchenko_CV_25-compressed.pdf';
import { useState } from 'react';

import './Header.css';

export default function Header({mode, setMode}) {
  const description = 'Experienced Front-End Developer and Technical Support Engineer. Aspiring Business Analyst with a strong interest in business analysis.';

  return (
    <header>
      <div className="avatar">
        <img src={avatar} alt="Stylized atom" />
        <div className="buttons">
          <a href='https://www.linkedin.com/in/eugene-pashchenko-41016365/' target="_blank"><img src={lin} alt="LinkedIn" /></a>
          <a href='mailto:eugene.pashchenko@gmail.com'><img src={mail} alt="Gmail" /></a>
          <a href={cvpdf} target="_blank"><img src={cv} alt="Download CV" /></a>
        </div>
      </div>
      <div className="my-name">
        <h1>Eugene Pashchenko</h1>
        <p>
          {description}
        </p>
      </div>
      <div className="theme-btn" onClick={() => setMode(!mode)}>
        <span className="material-symbols-outlined">prayer_times</span>
      </div>
    </header>
  );
}