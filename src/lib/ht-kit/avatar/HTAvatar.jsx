import React from 'react';
import { Avatar, Badge, Icon, IconButton } from '@material-ui/core';
import './HTAvatar.scss';

const HTAvatar = ({ image, onClick }) => (
  <IconButton onClick={onClick}>
    <Badge
      badgeContent={
        <Icon className="ht-avatar-icon" color="primary">
          arrow_drop_down
        </Icon>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      overlap="circle"
    >
      <Avatar alt="avatar" src={image} />
    </Badge>
  </IconButton>
);

export default HTAvatar;
