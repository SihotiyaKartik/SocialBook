import React from 'react'
import "./LeftBar.css"
import pic from "../../pic.jpg"
function LeftBar() {
    return (
        <div className="leftbar">
            <div className="leftbar-f">
                <img src={pic} alt="profile-pic" />
                <p>Kartik</p>
            </div>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt="friends" />
            <p>Friends</p>
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt="group" />
            <p>Groups</p>
            </span>
            <span>
            <img  src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" alt="market"  />   
            <p>Marketplace</p>
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" alt="watch" />   
            <p>Watch</p>
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" alt="memories" />   
            <p>Memories</p>
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" alt="saved" />   
            <p>Saved</p>
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt="pages" />
            <p>Pages</p>   
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png" alt="event" />   
            <p>Events</p>
            </span>
            <span>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/EWFR9xI64Mg.png" alt="job" />  
            <p>Jobs</p> 
            </span>
        </div>
    )
}

export default LeftBar
