import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    avatar: {
      marginTop: theme.spacing(4),
      width: 180,
      height: 180
    },
    text: {
      marginTop: theme.spacing(2)
    },
  })
);

export default function About() {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <Grid container justify='center'>
        <Avatar className={classes.avatar} alt='Brian with Jax' src='/mewithdog.jpg' />
      </Grid>
      <Hidden xsDown>
        <Typography className={classes.text} variant='h3' component='h1' align='center'>About</Typography>
      </Hidden>
      <Hidden smUp>
        <Typography className={classes.text} variant='h4' component='h1' align='center'>About</Typography>
      </Hidden>
      <Typography className={classes.text} variant='body1' paragraph>
        After years in the humanities, in the beginning of 2017 I attended a full stack JavaScript coding boot camp.
        It was love at first sight. I was immediately floored by the practice of programming.
        I could engage in complex, logical thinking as well as beautiful, creative expression.
        Through the boot camp, I learned a ton and created some great projects.
      </Typography>
      <Typography className={classes.text} variant='body1' paragraph>
        Soon after graduating my boot camp, I joined and am still with the software team of a North Carolina based company.
        On this team, I have worked across the full stack on multiple projects, writing code in JavaScript, TypeScript, and Go.
        In addition to this work, I have been building a highly interactive and beautiful front end for an application that lets you find, create, copy, and save lists: List Turtle™️.
      </Typography>
      <Typography className={classes.text} variant='body1' paragraph>
        When I'm not coding, I enjoy hanging out with my awesome partner, Kat, and our dog, Jax.
        My favorite thing to do is to play basketball, but I also like jogging and CrossFit.
        When relaxing, I like a good show, movie, or book.
      </Typography>
    </Container>
  );
}