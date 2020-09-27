import React from 'react'
import '../../styles/TweetBox.css'
import { Avatar, Button } from "@material-ui/core"

function TweetBox(props) {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar
                        src="https://vignette.wikia.nocookie.net/disney/images/4/43/Archimedes.png/revision/latest?cb=20140301213627"
                    />
                    <input placeholder="What's Happening?" type='text'/>
                </div>
                <input 
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" 
                    type='text' 
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}


export default TweetBox

