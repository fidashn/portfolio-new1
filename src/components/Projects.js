import React from 'react'
import { ProjectsData } from './ProjectsData';
import ImageSlider from './Slider';

function Projects() {
  return (
    <div id='projects-section'>Projects
    <div className='projects-box'><ImageSlider slides={ProjectsData} /></div>
    </div>
  )
}

export default Projects