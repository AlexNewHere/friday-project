import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {LINK} from 'p1-Main/c2-bll';

const linkActive = ({isActive}: { isActive: boolean }) => isActive ? s.active : s.link;

export const NavBar = () => {
    return (
        <div className={s.sidebar}>
            <div className={s.item}>
                <NavLink to={LINK.TEST} className={linkActive}>TEST</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={LINK.LOGIN} className={linkActive}>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={LINK.AUTH} className={linkActive}>Authentication</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={LINK.PROFILE} className={linkActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={LINK.RECOVER} className={linkActive}>Recovery password</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={LINK.PASSWORD} className={linkActive}>New password</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={LINK.FOUND404} className={linkActive}>Not Found</NavLink>
            </div>
        </div>
    );
};
