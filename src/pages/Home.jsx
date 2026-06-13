import { useContext } from 'react' 
import { UserContext } from '../common/UserContext';
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';

const Home = ({ children }) => {
    return(
    <>
      <div className="flex-1 flex flex-col min-w-0 mainContainer">
        <Navbar></Navbar>
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </>
    )
}
export default Home;
