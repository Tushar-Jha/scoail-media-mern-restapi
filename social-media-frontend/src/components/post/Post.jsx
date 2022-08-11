import React, { useContext } from 'react'
import axios from 'axios'
import './post.css';
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import { AuthContext } from '../../context/AuthContext';

function Post({ post }) {
    const [like, setLike] = React.useState(post.likes.length);
    const [isLiked, setIsLiked] = React.useState(false);
    const [user, setUser] = React.useState({})

    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

    const {user:currentUser}=useContext(AuthContext);

    React.useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    React.useEffect(() => {
        const fecthUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data)
        }
        fecthUser();
    }, [post.userId])

    const likeHandler = () =>{
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
        }catch(err){

        }
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"/persons/nodp.jpg"} alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className='postDate'>{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <span class="material-symbols-outlined">
                            more_vert
                        </span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.description}</span>
                    <img className="postImage" src={PF + post.image} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <span className="material-symbols-outlined like" onClick={likeHandler}>
                            thumb_up
                        </span>
                        {/* <span className="material-symbols-outlined like">
                            chat_bubble
                        </span> */}
                        <span className='likeText'>{like} people like this</span>
                    </div>
                    {/* <div className="postBottomRight">0 comments</div> */}
                </div>
            </div>
        </div>
    )
}

export default Post