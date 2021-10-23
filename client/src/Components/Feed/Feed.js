import React, { useState, useEffect} from 'react'
import Upload from '../Upload/Upload'
import Post from '../Post/Post'
import axios from "axios"
import "./Feed.css"
function Feed({username}) {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const res = username
            ? await axios.get("http://localhost:8000/api/post/profile/" + username)
            : await axios.get("http://localhost:8000/api/post/timeline/6174377aa6428f6bfc937cb4")
             
            setPosts(res.data);
        };
        fetchPost();
    },[username]);
    return (
        <div className="feed">
            <Upload />
            {posts.map((p) => (
                <Post key={p._id} post={p} />
            ))}
            
        </div>
    )
}

export default Feed
