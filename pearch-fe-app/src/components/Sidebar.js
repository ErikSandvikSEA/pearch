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
import { getRequest } from '../state/actions'

function Sidebar() {
    const username ='@sandviksea'
    const url = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${username}`
    const dispatch = useDispatch()
    const getResponse = useSelector(state => state.getResponse)

    const sendRequest = e => {
        e.preventDefault()
        dispatch(getRequest(url))
    }

    useEffect(() => {
        console.log(getResponse)
    }, [getResponse])

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

            <Button 
                variant='outlined' 
                className='sidebar__get'
                onClick={sendRequest}
            >
                Get Data
            </Button>

        </div>
    )
}

export default Sidebar


