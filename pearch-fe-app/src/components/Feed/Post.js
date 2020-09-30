import React from 'react'
import '../../styles/Post.css'
import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, Repeat, FavoriteBorder, Publish } from '@material-ui/icons'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

function Post(props) {

    const {
        displayName,
        username,
        verified,
        text,
        image,
        avatar
    } = props

    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{"  "}
                            <span className='post__headerSpecial'>
                                {verified && <VerifiedUserIcon className="post__badge" />} {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img 
                    className="post__image"
                    src={image}
                    alt=""
                    width="250px"
                />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post

