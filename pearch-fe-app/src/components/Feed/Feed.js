import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "../../styles/Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Feed(props) {
    const getResponse = useSelector(state => state.getResponse)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(
            getResponse && getResponse.data ? getResponse.data.statuses : []
        )
    }, [getResponse])

    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {posts.map((post, idx) => (
                <Post 
                    key={idx}
                    displayName={post.user.name}
                    username={`@${post.user.screen_name}`}
                    verified={post.user.verified}
                    text={post.text}
                    avatar={post.user.profile_image_url}
                    // image={post.image}
                />
            ))}
        </div>
    )
}

export default Feed

