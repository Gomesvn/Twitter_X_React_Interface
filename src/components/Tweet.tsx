import {ArrowsClockwise, Bookmark, ChartBar, ChatCircle, Export, Heart} from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps{
    content: string
}

export function Tweet(props: TweetProps){
   return (
    <Link to='/status' className="tweet">
        <img src="https://github.com/VINNICIUSDEV.png" alt="Vinícius Damascena" />
        <div className="tweet-content">
            <div className="tweet-content-header">
                <strong>Vinicius Damascena </strong>
                <span>@vinidamasdev</span>
            </div>

            <p>{props.content}</p>

            <div className="tweet-content-footer">
                <button type='button'>
                    <ChatCircle />
                    45
                </button>
                <button type='button'>
                    <ArrowsClockwise />
                    8
                </button>
                <button type='button'>
                    <Heart />
                    805
                </button>
                <button type='button'>
                    <ChartBar  />
                    80k
                </button>
                <button type='button'>
                    <Bookmark />
                </button>
                <button type='button'>
                    <Export  />
                </button>
            </div>
        </div>
    </Link>
   ) 
}