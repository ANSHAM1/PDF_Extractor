import Navbar from './Nav';
import ImageP from './Image';
import Know from './Knowmore';
import Contact from './Contact';
import Landing from './First';
function Dashboard(){
    return(
    <div>
        <Navbar className='Animate1'/>
        <Landing/>
        <ImageP/>
        <Know/>
        <Contact/>
    </div>
    )
}
export default Dashboard;
