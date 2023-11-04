import './InfoArea.css'
import { HoToFollow } from './InfoAreaComponentes/HoToFollow'
import { SearchBar } from './InfoAreaComponentes/SearchBar'
import { Subscribe } from './InfoAreaComponentes/Subscribe'
import { TreadingTopics } from './InfoAreaComponentes/TreadingTopics'

export function InforArea(){
    return (    
        <aside className='InfoArea_container'>
            <SearchBar />
            <Subscribe />
            <TreadingTopics />
            <HoToFollow />
        </aside >
    )
}