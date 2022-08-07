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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const logOutHandle = (): void => {
    dispatch(logOutUserThunk());
  };
  return isLoggedIn ? (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px' }}>{userName}</div>
      <Avatar
        alt={userName}
        src={userAvatar}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        disableAutoFocusItem
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 2,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -1,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={() => {
            navigate(LINK.PROFILE);
            handleClose();
          }}
        >
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
