import React from 'react'
import './share.css';

function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/persons/person1.jpg" alt="" />
                    <input type="text" placeholder="What's in your mind Tushar?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span class="material-symbols-outlined shareIcon tomato">
                                perm_media
                            </span>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <span class="material-symbols-outlined shareIcon blue">
                                label
                            </span>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <span class="material-symbols-outlined shareIcon green">
                                pin_drop
                            </span>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <span class="material-symbols-outlined shareIcon goldenrod">
                                mood
                            </span>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share