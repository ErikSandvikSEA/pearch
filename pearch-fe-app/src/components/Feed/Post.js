import React from 'react'
import { Avatar } from '@material-ui/core'

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
        <div className='post_avatar'>
            <Avatar src="https://vignette.wikia.nocookie.net/disney/images/4/43/Archimedes.png/revision/latest?cb=20140301213627" />
        </div>
    )
}

export default Post

