import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

import { LINK } from 'enums';

const linkActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? s.active : s.link;

export const NavBar = (): ReactElement => (
  <div className={s.sidebar}>
    <div className={s.item}>
      <NavLink to={LINK.LOGIN} className={linkActive}>
        Login
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.REGISTER} className={linkActive}>
        Register
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.PROFILE} className={linkActive}>
        Profile
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.RECOVER} className={linkActive}>
        Recovery password
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.PASSWORD} className={linkActive}>
        New password
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.EMAIL} className={linkActive}>
        Check email
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.PACKS} className={linkActive}>
        Packs List
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.CARDS} className={linkActive}>
        Cards
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={LINK.FOUND404} className={linkActive}>
        Not Found
      </NavLink>
    </div>
  </div>
);
