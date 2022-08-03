import React from 'react'
import './rightbar.css'


function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="onlineFriends">
          <div className='onlineFriendsHeader'>Friends Online</div>
          <ul className="onlineFriendsList">
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li><li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>            
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li> <li className="onlineFriend">
              <img className='onlineFriendImg' src="/assets/persons/person4.jpg" alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New Delhi</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Barcelona</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="/assets/persons/person1.jpg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Chinmaya Gupta</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/persons/person2.jpg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Chinmaya Gupta</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/persons/person3.jpg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Chinmaya Gupta</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/persons/person3.jpg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Chinmaya Gupta</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/persons/person1.jpg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Chinmaya Gupta</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/persons/person5.jpg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Chinmaya Gupta</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
          {profile?<ProfileRightbar />:<HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar