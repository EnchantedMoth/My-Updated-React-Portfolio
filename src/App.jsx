import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
//add import for header and footer when added
import './index.css';
import background from './assets/images/woodbackground.jpg'

function App() {
    return (
      <>
        <Nav />
        <main className="container-fluid" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh'  }}>
          <Outlet />
        </main>
      </>
    );
  }
  
  export default App;