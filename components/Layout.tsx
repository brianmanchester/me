import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/MenuRounded';
import DownloadIcon from '@material-ui/icons/GetAppRounded';

// Internal
import { WithChildren } from '../lib/common';
import { Routes } from '../lib/routes';
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
      padding: 6
    },
    logoButton: {
      padding: 0
    },
    logo: {
      width: 36,
      height: 36
    },
    title: {
      flexGrow: 1,
      color: '#000'
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

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position='fixed'>
        <Toolbar disableGutters>
          <Hidden mdUp>
            <IconButton className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link href={Routes.HOME}>
            <IconButton className={classes.logoButton} href={Routes.HOME} disableRipple>
              <Avatar className={classes.logo} alt='Bmanch' src='/logo.png' />
            </IconButton>
          </Link>
          <Typography variant='h6' className={classes.title}>Brian Manchester</Typography>
          <Hidden smDown>
            <InternalButtonLink
              href={Routes.HOME}
              text='Home'
              variant='text'
            />
            <InternalButtonLink
              href={Routes.ABOUT}
              text='About'
              variant='text'
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* <Hidden mdUp>
        
      </Hidden> */}
      <main className={classes.main}>
        <div className={classes.barSpacer} />
        {children}
      </main>
    </div>
  );
}