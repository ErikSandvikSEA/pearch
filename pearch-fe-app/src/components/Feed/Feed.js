import React from 'react'
import "../../styles/Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Feed(props) {
    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />

            <Post />
        </div>
    )
}

export default Feed

