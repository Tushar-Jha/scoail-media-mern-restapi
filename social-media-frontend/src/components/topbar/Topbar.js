import React, { useContext } from 'react'
import './topbar.css';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

function Topbar() {

    const {user}=useContext(AuthContext);
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className='logo'>Xocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <span class="material-symbols-outlined searchicon">
                        search
                    </span>
                    <input type="text" placeholder='Search for friend, post or video ' className="serachinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className="topbarIconItem">
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <span class="material-symbols-outlined">
                            chat
                        </span>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <span class="material-symbols-outlined">
                            notifications
                        </span>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"/persons/nodp.jpg"} alt="" className="topbarImage" />
                </Link>
            </div>
        </div>
    )
}

export default Topbar