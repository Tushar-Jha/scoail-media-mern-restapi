import React from 'react'
import './topbar.css';

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className='logo'>Xocial</span>
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
                <img src="/assets/persons/person1.jpg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}

export default Topbar