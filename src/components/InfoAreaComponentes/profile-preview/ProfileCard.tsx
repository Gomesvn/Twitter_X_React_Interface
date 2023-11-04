import { CheckCircle } from 'phosphor-react'
import './ProfileCard.css'

export function ProfileCard(){
    return(
        <div className='profile_container'>
                <img src="https://github.com/VINNICIUSDEV.png" alt="Vinícius Damascena" />
                    <div>
                    <div className='user_profile_container'>
                        <div className='user_name'><p>Vinicius Damascena</p><CheckCircle color='var(--twitter-blue)' weight="fill"/></div>
                        <span>@vinidamasdev</span>
                    </div>
                </div>
                <button>Follow</button>
        </div>
    )
}