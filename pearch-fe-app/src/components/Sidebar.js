//packages
import React from 'react'
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

//files
import SidebarOption from './SidebarOption'
import '../styles/Sidebar.css'

function Sidebar() {

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

        </div>
    )
}

export default Sidebar


