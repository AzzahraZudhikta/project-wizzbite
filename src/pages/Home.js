// src/pages/Home.js
import Sidebar from "../ComponentsBeranda/Sidebar";
import Header from "../ComponentsBeranda/Header";
import Card from "../ComponentsBeranda/Card";


const Home = () => {
    return (
        <div className="Dasboard-Overview">
            <Header />
            <div className="content-container">
                <Sidebar />
                 
                  <Card />
            </div>
        </div>
    );
};

export default Home;