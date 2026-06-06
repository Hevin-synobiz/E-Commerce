import { useContext } from 'react' 
import { UserContext } from '../common/Context'
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Header from './Navbar';

const Home = ({ children }) => {
    return(
    <>
      <div className="flex-1 flex flex-col min-w-0 mainContainer">
        <Header />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </>
    )
}
export default Home;
