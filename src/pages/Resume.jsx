
import '../App.css'
    
export default function Resume() {
    return (
        <div className='container pt-3'>
            <h2 className='my-font text-light'>Resume</h2>
            <div className='row'>
                <div className='col mx-2 pt-2'>
                    <h2 className='my-font text-light'>Work Experience</h2>
                    <h4 className='my-font text-light'>La Casita Mexican Restaurant</h4>
                    <h5 className='my-font text-light'>Server 1.5 years/ Manager 5.5 years</h5>
                    <h5 className='my-font text-light'>2017 - present</h5>
                    <ul>
                        <li className='text-light'>Multitasking - Handling multiple tables and parties at once</li>
                        <li className='text-light'>Communication - Customer and Coworker communication to promote a good work environement</li>
                        <li className='text-light'>Problem Solving - Taking care of any issues customers or coworkers may have</li>
                        <li className='text-light'>Leadership- Making sure coworkers are heard and then taking action</li>
                    </ul>
                </div>
            </div>            
        </div>
    )
}