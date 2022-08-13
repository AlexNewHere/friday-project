import React, { MouseEvent, ReactElement } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type DeveloperType = {
  name: string;
  avatar: string;
  github: string;
  linkedin: string;
};

export const Developer = React.memo(
  ({ name, avatar, github, linkedin }: DeveloperType): ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>): void => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
      setAnchorEl(null);
    };
    return (
      <div>
        <Avatar
          alt={name}
          src={avatar}
          onClick={handleClick}
          sx={{ cursor: 'pointer', mx: '5px' }}
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
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            <Link
              href={linkedin}
              target="_blank"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <LinkedInIcon sx={{ mr: '10px' }} />
              {name}
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            <Link
              href={github}
              target="_blank"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <GitHubIcon sx={{ mr: '10px' }} />
              GitHub
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  },
);
