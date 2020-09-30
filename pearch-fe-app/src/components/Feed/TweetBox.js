//packages
import React, { useEffect } from 'react'
import { Avatar, Button } from "@material-ui/core"
import { useSelector, useDispatch } from 'react-redux';

// files 
import '../../styles/TweetBox.css'
import { getRequest, setUsername } from '../../state/actions'


function TweetBox(props) {
    const username = useSelector(state => state.username)
    const dispatch = useDispatch()
    const getResponse = useSelector(state => state.getResponse)
    const url = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=@${username}`
    
    const sendRequest = (e) => {
        e.preventDefault()
        dispatch(getRequest(url))
        dispatch(setUsername(e))
    }

    const handleUsernameChange = e => {
        dispatch(setUsername(e))
    }

    useEffect(() => {
        console.log(getResponse)
    }, [getResponse])

    return (
        <div className='tweetBox'>
            <form onSubmit={sendRequest}>
                <div className='tweetBox__input'>
                    <Avatar
                        src="https://vignette.wikia.nocookie.net/disney/images/4/43/Archimedes.png/revision/latest?cb=20140301213627"
                    />
                    <input 
                        placeholder="Search by username" 
                        type='text'
                        onChange={handleUsernameChange}
                        value={username}
                    />
                </div>
                <Button 
                    className="tweetBox__tweetButton"
                    onClick={sendRequest}
                >
                    Search
                </Button>
            </form>
        </div>
    )
}


export default TweetBox

