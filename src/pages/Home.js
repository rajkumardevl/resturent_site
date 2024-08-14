import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../Images/banner.jpg";
import '../styles/Home.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Welcome To My Resturent</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Link to="/menu">
          <button className="btn">
             <AddShoppingCartIcon/>
             Order Now
             </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
