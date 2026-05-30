import { useContext } from 'react' 
import { UserContext } from '../common/Context'
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Header from './Navbar';

export default function Home() {
    const { user } = useContext(UserContext);
    return(
    <>
      <Header />
      <Dashboard />
    </>
    )
}
