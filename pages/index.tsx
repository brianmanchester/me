import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CodeIcon from '@material-ui/icons/CodeRounded';
import ProjectIcon from '@material-ui/icons/BuildRounded';
import OpenInNewIcon from '@material-ui/icons/OpenInNewRounded';

// Internal
import { Palette } from '../styles/colors';
const primary = Palette.PRIMARY;
const secondary = Palette.SECONDARY;

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    title: {
      marginTop: theme.spacing(4)
    },
    description: {
      fontStyle: 'italic'
    },
    workContainer: {
      marginTop: theme.spacing(4)
    },
    border: {
      height: 3,
      backgroundImage: `linear-gradient(to right, ${primary}, ${primary}, ${primary}, ${secondary}, ${secondary})`
    },
    iconContainer: {
      width: 32,
      height: 32,
      marginRight: theme.spacing(1),
      [theme.breakpoints.down(360)]: {
        display: 'none'
      }
    },
    codeIcon: {
      fontSize: 32
    },
    workTitle: {
      fontWeight: 'bold',
      color: `linear-gradient(to right, ${primary}, ${secondary})`
    },
    skills: {
      marginTop: theme.spacing(1),
      marginRight: 16,
      marginLeft: 16
    },
    projectIcon: {
      marginTop: 5,
      marginLeft: 5,
      fontSize: 22
    },
    secondaryAction: {
      height: 24,
      zIndex: -1
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <Hidden xsDown>
        <Typography className={classes.title} variant='h3' component='h1' align='center'>Brian Manchester</Typography>
        <Typography className={classes.description} variant='h5' component='h2' align='center'>full stack developer</Typography>
      </Hidden>
      <Hidden smUp>
        <Typography className={classes.title} variant='h4' component='h1' align='center'>Brian Manchester</Typography>
        <Typography className={classes.description} variant='h6' component='h2' align='center'>full stack developer</Typography>
      </Hidden>
      <Grid className={classes.workContainer} container alignItems='center'>
        <Grid className={classes.iconContainer} item>
          <CodeIcon className={classes.codeIcon} color='primary' />
        </Grid>
        <Grid item>
          <Typography className={classes.workTitle} variant='h6' component='h3' color='primary'>Languages & technologies</Typography>
        </Grid>
      </Grid>
      <div className={classes.border} />
      <Typography className={classes.skills} variant='subtitle1' component='h4'>Languages: JavaScript (es6+), TypeScript, Go</Typography>
      <Typography className={classes.skills} variant='subtitle1' component='h4'>Technologies: Node.js, Express, Postgres, MySQL, GraphQL, Apollo, React, Redux, Next.js, Angular, Material-UI</Typography>
      <Grid className={classes.workContainer} container alignItems='center'>
        <Grid className={classes.iconContainer} item>
          <ProjectIcon className={classes.projectIcon} color='primary' />
        </Grid>
        <Grid item>
          <Typography className={classes.workTitle} variant='h6' component='h3' color='primary'>Projects</Typography>
        </Grid>
      </Grid>
      <div className={classes.border} />
      <List>
        <ListItem button component='a' href='https://www.listturtle.com/' target='_blank'>
          <ListItemText primary='List Turtle™️' secondary='Find, create, copy, and save lists about anything.' />
          <ListItemSecondaryAction classes={{ root: classes.secondaryAction }}>
            <OpenInNewIcon />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component='a' href='https://still-sierra-11518.herokuapp.com/' target='_blank'>
          <ListItemText primary="Truckin' Good" secondary='Find, rate, and write reviews for food trucks.' />
          <ListItemSecondaryAction classes={{ root: classes.secondaryAction }}>
            <OpenInNewIcon />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component='a' href='https://bmanch.github.io/aardy-look/' target='_blank'>
          <ListItemText primary="Aardvark" secondary='Going to college? Make an informed decision about where to go and what to study with this debt analysis tool.' />
          <ListItemSecondaryAction classes={{ root: classes.secondaryAction }}>
            <OpenInNewIcon />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
    </Container>
  );
}
