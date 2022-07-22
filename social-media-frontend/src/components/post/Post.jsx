import React from 'react'
import './post.css';

function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/persons/person1.jpg" alt="" />
                        <span className="postUsername">Tushar Jha</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <span class="material-symbols-outlined">
                            more_vert
                        </span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post</span>
                    <img className="postImage" src="/assets/posts/post3.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <span className="material-symbols-outlined like">
                            thumb_up
                        </span>
                        <span className="material-symbols-outlined like">
                            chat_bubble
                        </span>
                        <span className='likeText'>32 people like this</span>
                    </div>
                    <div className="postBottomRight">9 comments</div>
                </div>
            </div>
        </div>
    )
}

export default Post