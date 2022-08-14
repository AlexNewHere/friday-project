import React, { MouseEvent, ReactElement } from 'react';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ReactComponent as MenuIcon } from 'assets/images/menuIcon.svg';
// import { EditIcon, RemoveIcon } from 'pages';

export const PackNameMenu = (): ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuIcon onClick={handleClick} style={{ cursor: 'pointer' }} />
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
              right: 23,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          {/* editIcon.tsx */}
          <DriveFileRenameOutlineIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {/* removeIcon.tsx */}
          <DeleteForeverOutlinedIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SchoolOutlinedIcon />
        </MenuItem>
      </Menu>
    </>
  );
};
