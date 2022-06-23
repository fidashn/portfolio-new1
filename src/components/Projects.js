import { ProjectsData } from './ProjectsData';
import ImageSlider from './Slider';


function Projects() {


  return (
    <div id='projects-section' > 
    <div className='projects-box'><h3>Projects</h3> <ImageSlider slides={ProjectsData} /></div>
    </div>
  )
}

export default Projects