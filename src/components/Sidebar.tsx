import twitterLogo from '../assets//X-logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, House, MagnifyingGlass, Notepad, Pencil, User, Users } from 'phosphor-react'

import './Sidebar.css'
import { NavLink } from 'react-router-dom'

export function Sidebar(){
    return (
        <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <NavLink to="/" >
             <House weight="fill" />
            <span>Home</span>
          </NavLink>
          <a href="">
             <MagnifyingGlass />
            <span>Explore</span>
          </a>
          <a href="" >
            <Bell />
            <span>Notifications</span>
          </a>
          <a href="">
             <EnvelopeSimple  />
            <span>Messages</span>
          </a>
          <a href="">
             <Notepad  />
            <span>List</span>
          </a>
          <a href="">
             <BookmarkSimple />
            <span>Bookmarks</span>
          </a>
          <a href="">
             <Users  />
            <span>Comunity</span>
          </a>
          <a href="">
             <img src={twitterLogo} alt="Logo" width={30} height={30} />
            <span>Premium</span>
          </a>
          <a href="" >
            <User />
            <span>Profile</span>
          </a>
          <a href="">
             <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>
        <button className='new-tweet tooltip' type="button">
          <Pencil />
          <span>Post</span>
        </button>
      </aside>
    )
}