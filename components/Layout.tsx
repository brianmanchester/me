import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/MenuRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';
import AboutIcon from '@material-ui/icons/AccountCircleRounded';
import ContactIcon from '@material-ui/icons/EmojiPeopleRounded';
import DownloadIcon from '@material-ui/icons/GetAppRounded';

// Internal
import { WithChildren } from '../lib/common';
import { Routes } from '../lib/routes';
import { Palette } from '../styles/colors';
import useWidth from '../hooks/useWidth';
import InternalButtonLink from './InternalButtonLink';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1
    },
    bar: {
      backgroundColor: '#fff',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    menuButton: {
      padding: 6,
      marginRight: theme.spacing(1)
    },
    list: {
      width: 250
    },
    logoButton: {
      padding: 0,
      marginRight: theme.spacing(1)
    },
    logo: {
      width: 36,
      height: 36
    },
    title: {
      flexGrow: 1,
      color: Palette.TEXT,
      fontStyle: 'italic',
      fontWeight: 'bolder',
      marginLeft: 6
    },
    buttonOnPage: {
      fontWeight: 'bold'
    },
    buttonOffPage: {
      fontWeight: 'lighter'
    },
    main: {
      flexGrow: 1,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1)
    },
    barSpacer: theme.mixins.toolbar
  })
);

export default function Layout({ children }: WithChildren) {
  const classes = useStyles();
  const [ panelOpen, setPanelOpen ] = useState(false);
  const width = useWidth();
  const { pathname } = useRouter();

  function handleOpenPanel() {
    setPanelOpen(true);
  }

  function handleClosePanel() {
    setPanelOpen(false);
  }

  useEffect(() => {
    const largeScreen = width === 'md' ||  width === 'lg'
    if (largeScreen && panelOpen) {
      setPanelOpen(false);
    }
  }, [width]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position='fixed'>
        <Toolbar disableGutters>
          <Hidden mdUp>
            <IconButton className={classes.menuButton} onClick={handleOpenPanel}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link href={Routes.HOME}>
            <IconButton className={classes.logoButton} href={Routes.HOME} disableRipple>
              <Avatar className={classes.logo} alt='Bmanch' src='/logo.png' />
            </IconButton>
          </Link>
          <Typography variant='subtitle1' className={classes.title}>Work & Projects</Typography>
          <Hidden smDown>
            <InternalButtonLink
              cls={pathname === Routes.HOME ? classes.buttonOnPage : classes.buttonOffPage}
              width={64}
              href={Routes.HOME}
              text='Home'
              variant='text'
            />
            <InternalButtonLink
              cls={pathname === Routes.ABOUT ? classes.buttonOnPage : classes.buttonOffPage}
              width={64}
              href={Routes.ABOUT}
              text='About'
              variant='text'
            />
            <InternalButtonLink
              cls={pathname === Routes.CONTACT ? classes.buttonOnPage : classes.buttonOffPage}
              width={82.06}
              href={Routes.CONTACT}
              text='Contact'
              variant='text'
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          anchor='left'
          open={panelOpen}
          onClose={handleClosePanel}
        >
          <div className={classes.list} role='presentation' onClick={handleClosePanel}>
            <List disablePadding>
              <Link href={Routes.HOME}>
                <ListItem component='a' href={Routes.HOME} button>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItem>
              </Link>
              <Link href={Routes.ABOUT}>
                <ListItem component='a' href={Routes.ABOUT} button>
                  <ListItemIcon><AboutIcon /></ListItemIcon>
                  <ListItemText primary='About' />
                </ListItem>
              </Link>
              <Link href={Routes.CONTACT}>
                <ListItem component='a' href={Routes.CONTACT} button>
                  <ListItemIcon><ContactIcon /></ListItemIcon>
                  <ListItemText primary='Contact' />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </Hidden>
      <main className={classes.main}>
        <div className={classes.barSpacer} />
        {children}
      </main>
    </div>
  );
}