//packages
import React, { useEffect } from 'react'
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined'
import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';

//files
import SidebarOption from './SidebarOption'
import '../styles/Sidebar.css'
import { getRequest, setUsername } from '../state/actions'

function Sidebar() {
    const username = useSelector(state => state.username)
    const dispatch = useDispatch()
    const getResponse = useSelector(state => state.getResponse)
    const url = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=@${username}`
    
    const sendRequest = e => {
        e.preventDefault()
        dispatch(getRequest(url))
    }

    const handleUsernameChange = e => {
        dispatch(setUsername(e))
    }

    useEffect(() => {
        console.log(getResponse)
    }, [getResponse])

    useEffect(() => {
        console.log(username)
    }, [username])

    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon' />

            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizOutlined} text="Options"/>


            <Button 
                variant='outlined' 
                className='sidebar__tweet'
            >
                Tweet
            </Button>
            <form>
                <div className='sidebar__input'>
                    <input 
                        placeholder="Get Data by Username" 
                        type='text' 
                        onChange={handleUsernameChange}
                        value={username}
                    />
                </div>
                <Button 
                    variant='outlined' 
                    className='sidebar__get'
                    onClick={sendRequest}
                    >
                    Get Data
                </Button>
            </form>

        </div>
    )
}

export default Sidebar


