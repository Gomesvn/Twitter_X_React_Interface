import './HoToFollow.css'
import { ProfileCard } from './profile-preview/ProfileCard'

export function HoToFollow(){
    return (
      <div className="hotofollow-container">
        <h2>
            Who to follow
        </h2>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <a href="#">Show more</a>
      </div>
    )
}