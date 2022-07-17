import '../assets/stylesheets/projects.scss'

function Projects() {

    return (
        <>
            <div className='projects-header'>
                <h1>Software Engineering</h1>
            </div>
            <div className='projects-container'>
                <div className='projects-left'>
                    <div className='timeline-line'>

                    </div>
                </div>
                <div className='projects-right'>
                    <div className='project-container'>
                        <div className='project-info'>
                            <h3>BeatBox</h3> 
                            <p>Four-channel audio mixing interface.</p>
                            <p>Users are able to load & manipulate their own tracks.</p>
                        </div>
                        <div className='project-screenshot'>

                        </div>
                    </div>
                    <div className='project-container'>
                        <div className='project-info'>
                            <h3>Roobinhüd</h3> 
                            <p>Description</p>
                        </div>
                        <div className='project-screenshot'>
                            
                        </div>
                    </div>
                    <div className='project-container'>
                        <div className='project-info'>
                            <h3>LineAlert</h3> 
                            <p>Description</p>
                        </div>
                        <div className='project-screenshot'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;