import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import userAtom from 'store/userAtom';
import { useRecoilValue } from 'recoil';

// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

import AppBar from '@mui/material/AppBar';

// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import MetaMaskLogin from '@components/MetaMaskLogin';

// import Badge from '@mui/material/Badge';
// type Anchor = 'right';
import { Container, NotificationBar } from '../common/NavBarEmotion';

// import headerLogo from '../assets/imgs/logo/headerLogo.png';

import headerLogo from '../../assets/imgs/logo/headerLogo.png';

function NavBar() {
  const router = useRouter();
  const user = useRecoilValue(userAtom);
  const pathname = router.asPath;

  // const [state, setState] = React.useState({
  //   right: false,
  // });

  // const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
  //   setState({ ...state, [anchor]: open });
  // };
  // const list = (
  //   <NotificationBar role="presentation" onClick={toggleDrawer('right', false)}>
  //     {/* notifications */}
  //     <List>
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <img src="" alt="" />
  //           </ListItemIcon>
  //           <div className="notification-item">
  //             <h4>test</h4>
  //             <p>test</p>
  //           </div>
  //         </ListItemButton>
  //       </ListItem>
  //       <Divider />
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <img src="" alt="" />
  //           </ListItemIcon>
  //           <ListItemText primary={'text'} />
  //         </ListItemButton>
  //       </ListItem>
  //     </List>
  //   </NotificationBar>
  // );
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Container>
        <div className="logo-container">
          <Link href={`/`} id="link-item">
            <img src={headerLogo.src} alt="" id="logo-image" />
          </Link>
        </div>

        <div className="menu-container">
          <Link href={`/`} id="link-item">
            <h4 className={pathname === '/' ? 'selected' : 'default'}>홈</h4>
          </Link>

          <Link href={`/rankings`} id="link-item">
            <h4 className={pathname === '/rankings' ? 'selected' : 'default'}>
              명예의 전당
            </h4>
          </Link>

          <Link href={`/store`} id="link-item">
            <h4 className={pathname === '/store' ? 'selected' : 'default'}>
              상점
            </h4>
          </Link>

          <Link href={`/square`} id="link-item">
            <h4 className={pathname === '/store' ? 'selected' : 'default'}>
              광장
            </h4>
          </Link>

          {!Boolean(user) ? (
            <div className="icon-container">
              <MetaMaskLogin />
            </div>
          ) : (
            <div className="icon-container">
              {/* notification */}
              {/* <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon
                  sx={{ fontSize: '30px' }}
                  id="icon-item"
                  onClick={toggleDrawer('right', !state.right)}
                />
              </Badge>
              <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
              >
                {list}
              </Drawer>
              profile */}
              <Link href={`/profile/${user?.memberId}`}>
                <img src={user?.memberImage} alt="" id="profile-image" />
              </Link>
            </div>
          )}
        </div>
      </Container>
    </AppBar>
  );
}

export default NavBar;
