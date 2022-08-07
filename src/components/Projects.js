import { ProjectsData } from './ProjectsData';
import ImageSlider from './Slider';


function Projects() {

  return (
    <>
    <div className='projects-box'><h3>Projects</h3> <ImageSlider slides={ProjectsData} /></div>
    <div id='projects-section' > 
    </div>
    </>
  )
}

export default Projects