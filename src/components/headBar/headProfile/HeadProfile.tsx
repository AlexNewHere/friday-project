import React, { ReactElement, MouseEvent } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { Avatar, Fade, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from './HeadProfile.module.scss';

import { LogInOutButton } from 'components/customs/Button/LogInOutButton';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { logOutUserThunk } from 'store';

export const HeadProfile = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userAvatar = useAppSelector(state => state.login.avatar);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOutHandle = (): void => {
    dispatch(logOutUserThunk());
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <div className={s.block}>
      {isLoggedIn ? (
        <div className={s.content}>
          <div style={{ marginRight: '12px' }}>{userName}</div>
          <Avatar alt={userName} src={userAvatar} onClick={handleClick} />
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            autoFocus={false}
          >
            <MenuItem onClick={() => navigate(LINK.PROFILE)}>
              <SportsMartialArtsIcon sx={{ marginRight: '5px' }} />
              Profile
            </MenuItem>
            <MenuItem onClick={logOutHandle}>
              <LogoutIcon sx={{ width: '20px', marginRight: '10px' }} />
              Log out
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <LogInOutButton />
      )}
    </div>
  );
};
