import Navbar from '../../components/Navbar';
import ProjectInfo from '../../components/ProjectInfo';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="content-wrapper">
                <ProjectInfo />
            </div>
        </div>
    );
};

export default Home;