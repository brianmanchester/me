import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginTop: theme.spacing(4)
    },
    spacer: {
      marginTop: theme.spacing(2)
    },
    divider: {
      marginTop: 28
    },
    emailIconContainer: {
      marginRight: theme.spacing(1),
      width: 28,
      height: 28,
      [theme.breakpoints.down(380)]: {
        display: 'none'
      }
    },
    emailIcon: {
      fontSize: 28
    },
    linkedInIcon: {
      fontSize: 28,
      color: '#2177b5'
    },
    twitterIcon: {
      fontSize: 28,
      color: '#30a1f2'
    },
    gitHubIcon: {
      fontSize: 28,
      color: '#24292d'
    }
  })
);

export default function Contact() {
  const classes = useStyles();

  return (
    <Container maxWidth='xs'>
      <Hidden xsDown>
        <Typography className={classes.title} variant='h3' component='h1' align='center'>Contact</Typography>
      </Hidden>
      <Hidden smUp>
        <Typography className={classes.title} variant='h4' component='h1' align='center'>Contact</Typography>
      </Hidden>
      <Grid className={classes.spacer} container justify='center' alignContent='center'>
        <Grid className={classes.emailIconContainer} item>
          <EmailIcon className={classes.emailIcon} />
        </Grid>
        <Grid item>
          <Typography variant='subtitle1' component='p'>brian.l.manchester (at) gmail (dot) com</Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid className={classes.spacer} container justify='space-around' alignItems='center'>
        <IconButton href='https://www.linkedin.com/in/brian-l-manchester/' target='_blank'>
          <LinkedInIcon className={classes.linkedInIcon} />
        </IconButton>
        <IconButton href='https://twitter.com/bmanch7' target='_blank'>
          <TwitterIcon className={classes.twitterIcon} />
        </IconButton>
        <IconButton href='https://github.com/bmanch' target='_blank'>
          <GitHubIcon className={classes.gitHubIcon} />
        </IconButton>
      </Grid>
    </Container>
  );
}