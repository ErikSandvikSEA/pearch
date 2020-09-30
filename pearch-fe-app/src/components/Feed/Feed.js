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
            {/* Header */}
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
            {/* <Post 
                displayName="Archimedes the Highly-Educated Owl"
                username="@who_what_what"
                verified={true}
                text="YOOO it's working"
                avatar="https://vignette.wikia.nocookie.net/disney/images/4/43/Archimedes.png/revision/latest?cb=20140301213627"
                image="https://png.pngtree.com/png-clipart/20190629/original/pngtree-cute-owl-cartoon-set-png-image_4100837.jpg" 
            />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Feed

