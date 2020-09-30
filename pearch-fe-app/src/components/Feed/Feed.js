import React, { useState, useEffect } from 'react'
import "../../styles/Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../firebase/firebase'

function Feed(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    })

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
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            <Post 
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
            <Post />
        </div>
    )
}

export default Feed

