import '../assets/stylesheets/projects.scss'

function Projects() {

    return (
        <>
            <div className='projects-header'>
                <h1>Software Engineering</h1>
                <p>Tom is a Gradute from App Academy's March 2022 Cohort</p>
            </div>
            <div className='projects-container'>
                <div className='projects-left'>
                    <div className='timeline-line'>
                        <div className='timeline-marker'/>
                        <div className='timeline-marker'/>
                        <div className='timeline-marker'/>
                    </div>
                </div>
                <div className='projects-right'>
                    <div className='project-container'>
                        <div className='project-info'>
                            <h3>BeatBox</h3> 
                            <p> Built over the course of a week, and entirely in vanilla JavaScript, BeatBox is a four-channel audio mixing interface that allows users to load and manipulate audio with features such as loops and hotcues. </p>
                        </div>
                        <div className='project-screenshot'>

                        </div>
                    </div>
                    <div className='project-container'>
                        <div className='project-info'>
                            <h3>Roobinhüd</h3> 
                            <p>Built over the course of two weeks, Roobinhüd is a (Robinhood clone) stock trading application that allows users to view / trade stocks with real time data and price charts.</p>
                        </div>
                        <div className='project-screenshot'>
                            
                        </div>
                    </div>
                    <div className='project-container'>
                        <div className='project-info'>
                            <h3>LineAlert</h3> 
                            <p>Built over the course of a week, LineAlert is a safety-oriented NYC subway alert application where users can create live alerts, notifying others with similar routes & preferences.</p>
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