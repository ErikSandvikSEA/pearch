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
                <Avatar src="https://vignette.wikia.nocookie.net/disney/images/4/43/Archimedes.png/revision/latest?cb=20140301213627" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Archimedes the Highly Intelligent Owl{"  "}
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className="post__badge" /> @who_what_what
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>WHO? What what???</p>
                    </div>
                </div>
                <img 
                    className="post__image"
                    src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-cute-owl-cartoon-set-png-image_4100837.jpg" 
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

