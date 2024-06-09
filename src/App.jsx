import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
import './index.css';
import background from './assets/images/woodbackground.jpg'

function App() {
    return (
      <>
        <Nav />
        <main className="container-fluid" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh'  }}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
  
  export default App;