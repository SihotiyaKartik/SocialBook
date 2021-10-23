import React from 'react'
import "./RightBar.css"
import pic from "../../pic.jpg"
function RightBar() {
    return (
        <div className="rightbar">
            <p className="sponsor">Sponsors</p>
            <img src={pic} alt="sponsors" />
            <p className="friend">Friends</p>

        </div>
    )
}

export default RightBar
