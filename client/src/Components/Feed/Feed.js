import React from 'react'
import Upload from '../Upload/Upload'
import Post from '../Post/Post'
import "./Feed.css"
function Feed() {
    return (
        <div className="feed">
            <Upload />
            <Post />
        </div>
    )
}

export default Feed
