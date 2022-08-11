import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './rightbar.css'
import {Add,Remove} from '@mui/icons-material'



function Rightbar({ user }) {

  const HomeRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <div className="onlineFriends">
          <div className='onlineFriendsHeader'>Friends Online</div>
          <ul className="onlineFriendsList">
            <li className="onlineFriend">
              <img className='onlineFriendImg' src={PF + '/persons/person1.jpg'} alt="" />
              <span className='onlineFriendName'>Tushar Jha</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src={PF + '/persons/person2.jpg'} alt="" />
              <span className='onlineFriendName'>Vivek Anand</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src={PF + '/persons/person3.jpg'} alt="" />
              <span className='onlineFriendName'>Aniket Mehta</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src={PF + '/persons/person5.jpg'} alt="" />
              <span className='onlineFriendName'>Gaurav Khurana</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src={PF + '/persons/person4.jpg'} alt="" />
              <span className='onlineFriendName'>Anushka Sharma</span>
              <div className='onlineStatus'></div>
            </li>
            <li className="onlineFriend">
              <img className='onlineFriendImg' src={PF + '/persons/nodp.jpg'} alt="" />
              <span className='onlineFriendName'>Arpit Sagar</span>
              <div className='onlineStatus'></div>
            </li>
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser,dispatch}=useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    const [followed,setFollowed]=useState(currentUser.following.includes(user?._id));

    useEffect(()=>{
      setFollowed(currentUser.following.includes(user?._id));
    },[currentUser,user._id]);

    useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get("/users/friends/" + user._id);
          setFriends(friendList.data);
        } catch (err) {
          console.log(err);
        }
      }
      getFriends();
    }, [user._id])

    const handleFollow = async() =>{
      try{
        if(followed){
          await axios.put('/users/'+user._id+'/unfollow',{userId:currentUser._id});
          dispatch({type:"UNFOLLOW",payload:user._id});
        }else{
          await axios.put('/users/'+user._id+'/follow',{userId:currentUser._id});
          dispatch({type:"FOLLOW",payload:user._id});
        }
      }catch(err){
        console.log(err);
      }
      setFollowed(!followed)
    }
    return (
      <>
        {user.username!==currentUser.username && (
          <button className="rightBarFollowButton" onClick={handleFollow}>
            {followed?"Unfollow":"Follow"}
            {followed?<Remove fontSize='16px'/>:<Add fontSize='16px'/>}
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {
            friends.map((f) => {
              return (
                <Link to={"/profile/"+f.username} style={{"textDecoration":"none", "color":"black", "fontWeight":"500", "textAlign":"center"}}>
                <div className="rightBarFollowing">
                  <img src={f.profilePicture ? PF + f.profilePicture : PF + "persons/nodp.jpg"} alt="" className="rightBarFollowingImage" />
                  <span className="rightBarFollowingName">{f.username}</span>
                </div>
                </Link>
              )
            })
          }
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar