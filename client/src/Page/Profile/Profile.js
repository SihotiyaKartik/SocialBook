import React from 'react'
import "./Profile.css"
import Header from '../../Components/Header/Header'
import LeftBar from '../../Components/LeftBar/LeftBar'
import Feed from '../../Components/Feed/Feed'
import RightBar from '../../Components/RightBar/RightBar'
import pic from "../../pic.jpg"
import profile from "../../profile.png"
function Profile() {
    return (
        <div>
            <Header />
            <div className="profile">
                <LeftBar />
                <div className="profile-right">
                    <div className="profile-right-t">
                    <div className="profile-photo">
                    <img src={pic} alt="pic" />
                    <img src={profile} alt="profile" />
                    </div>
                    <div className="profile-info">
                    <p>Kartadsdasdasdadasdik</p>
                    </div>
                    </div>
                    <div className="profile-right-b">
                        <Feed  username="Kartik" />
                        <RightBar />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Profile
