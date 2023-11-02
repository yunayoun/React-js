import React from 'react'
import NotificationBell from '../common/NotificationBell/NotificationBell'
import CommonButton from '../common/CommonButton/CommonButton'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';

const Header = ({title}) => {
  const headerStyles = {
    wrapper:{
      width:'100%',
      padding:'20px',
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#009be5',
    },
    topRow:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'end',
      alignItem:'center',
      marginBottom:'20px',
      '*':{
        marginRight:'5px'
      },
    },
    middleRow:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItem:'center',
      marginBottom:'20px',
      marginLeft:'320px',
    },
    link:{
      fontWeight:500,
      color:'rgba(255,255,255,0.7)',
      '&:hover':{
        color:'#fff',
        cursor:'pointer',
      },
    },
    webButton:{
      marginRight:'5px'
    }
  };

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography
          sx={headerStyles.link}
        >
          go to does
        </Typography>
        <NotificationBell 
        iconColor='primary'
        />
        <Avatar src="	https://mui.com/static/images/avatar/1.jpg" />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography 
          variant='h1'
          color='white'
        >
          {title}
        </Typography>
        <Box>
          <CommonButton 
            sx={headerStyles.webButton} 
            variant='outlined'
          >web setup
          </CommonButton>
          <Tooltip 
            title='Help'
          >
            <IconButton 
              color='white' 
              sx={headerStyles.helpIcon}
              ><HelpIcon/>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default Header