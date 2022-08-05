import React, { ReactElement, MouseEvent } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

import { LogInOutButton } from 'components';
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
  return isLoggedIn ? (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px' }}>{userName}</div>
      <Avatar alt={userName} src={userAvatar} onClick={handleClick} />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
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
    </Box>
  ) : (
    <LogInOutButton />
  );
};
