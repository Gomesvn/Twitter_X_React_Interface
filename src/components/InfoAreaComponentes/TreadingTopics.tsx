import { DotsThree, Share } from "phosphor-react";
import './TreadingTopics.css'

export function TreadingTopics(){
    return (
        <div className="trendings_container">
            <h2>
                What’s happening
            </h2>
            <ul>
                {
                //cada elemento da lista poderia ser um componente
                }
                <li>
                    <h3>#ReactApps</h3>
                    <p>Desenvolvendo aplicações web e mobile</p>
                    <div className="footer-trending"><span><Share size={15}/></span><span>Estudando</span></div>
                </li>
                <li>
                    <div className="header-trending"><span>Programação ▪ Trending</span><span><DotsThree size={20}/></span></div>
                    <h3>Atualização do Node</h3>
                    <p>60.5k posts</p>
                </li>
                <li>
                    <div className="header-trending"><span>Programação ▪ Trending</span><span><DotsThree size={20}/></span></div>
                    <h3>Atualização do Node</h3>
                    <p>60.5k posts</p>
                </li>
                <li>
                    <div className="header-trending"><span>Programação ▪ Trending</span><span><DotsThree size={20}/></span></div>
                    <h3>Atualização do Node</h3>
                    <p>60.5k posts</p>
                </li>
                <li>
                    <div className="header-trending"><span>Programação ▪ Trending</span><span><DotsThree size={20}/></span></div>
                    <h3>Atualização do Node</h3>
                    <p>60.5k posts</p>
                </li>
            </ul>
            <a href="#">Show more</a>
        </div>
    )
}