import axios from 'axios';
import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import {Cancel} from '@mui/icons-material'
import './share.css';

function Share() {

    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc=React.useRef();
    const [file,setFile]=React.useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId:user._id,
            description:desc.current.value,
        }  
        if(file){
            const data = new FormData();
            console.log(data);
            const filename=file.name;
            data.append('file',file);
            // data.append('name',filename);
            newPost.image=filename;
            try{
                await axios.post("/upload",data);
            }catch(err){
                console.log(err);
            }
        }
        try{
            await axios.post("/posts",newPost);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src={user.profilePicture?PF+user.profilePicture:PF+"/persons/nodp.jpg"} alt="" />
                    <input type="text" placeholder={"What's on your mind "+user.username+"?" } className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImageContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImage" />
                        <Cancel  className="shareCancelImage" onClick={()=>setFile(null)}/>
                    </div>
                )}
                <div className="shareBottom">
                    <form className="shareOptions" onSubmit={submitHandler}>
                        <label htmlFor='file' className="shareOption">
                            <span class="material-symbols-outlined shareIcon tomato">
                                perm_media
                            </span>
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={{display:"none"}} type="file" id="file" accept='.png,,jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
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
                        <button className="shareButton" type="submit">Share</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Share