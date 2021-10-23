import Header from "../../Components/Header/Header";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import LeftBar from "../../Components/LeftBar/LeftBar";
import "./Home.css"
import React from 'react'

function Home() {
    return (
        <div>
            <Header />
            <div className="home">
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </div>
    )
}

export default Home 
