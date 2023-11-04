import { Gear } from "phosphor-react";
import './Header.css'
import { NavLink } from "react-router-dom";

interface HeaderProps{
    title: string
}
export function Header(props: HeaderProps){
    return (
        <div className="timeline-header">
            {!props.title ?
                (
                    <div className="timeLine_nav">
                                <NavLink to="/">
                                    For you
                                </NavLink>
                                <NavLink to="/following">
                                    Following
                                </NavLink>
                    </div>
                )
                :
                (
                    <div>
                        <p>{props.title}</p>
                    </div>
                )
            }
            <div className="settings-icon">
                <Gear/>
            </div>
        </div>
    )
}