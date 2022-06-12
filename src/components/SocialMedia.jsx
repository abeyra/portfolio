import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {GiNewspaper} from 'react-icons/gi';
import { images } from '../constants';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div >
          <a href="https://github.com/abeyra" target="_blank" rel="noreferrer">
            <BsGithub/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/andres-beyra/" target="_blank" rel="noreferrer">
            <BsLinkedin/>
          </a>           
        </div>
        <div>
          <a href="https://cv-andres-beyra.netlify.app/" target="_blank" rel="noreferrer">
            <GiNewspaper/>
          </a>            
        </div>
    </div>
  );
}

export default SocialMedia