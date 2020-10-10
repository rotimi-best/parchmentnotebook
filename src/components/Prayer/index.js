import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import LinearProgress from '@material-ui/core/LinearProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

import PrayerCard from '../PrayerCard';

import { getPrayer, updatePrayer } from '../../actions/prayersAction';
import useStyles from './style';

const Prayer = () => {
  const classes = useStyles();
  const { prayerId } = useParams();
  const {isPrayerFetching, userId, prayer, userPictureUrl} = useSelector(state => ({
    prayer: state.prayers.prayer,
    isPrayerFetching: state.prayers.isPrayerFetching,
    userId: state.authentication.user.userId,
    userPictureUrl: state.authentication.user
      && state.authentication.user.picture,
  }))
  const dispatch = useDispatch();

  const [comment, setComment] = React.useState('');

  useEffect(() => {
    if (!prayer && prayerId) {
      dispatch(getPrayer(userId, prayerId))
    }
  }, [dispatch, userId, prayerId, prayer]);

  const handleComment = (e) => {
    setComment(e.target.value);
  }
  const handleSubmitComment = () => {
    setComment('');
    dispatch(updatePrayer(userId, prayerId, {
      comment
    }))
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  return (
    <main className={classes.content}>
      {isDesktopOrLaptop && <div className={classes.toolbar} />}
      <Container
        maxWidth="sm"
        classes={{
          root: classes.containerRoot
        }}
      >
        {isPrayerFetching && <LinearProgress />}
        <CssBaseline />
        {/* <NewPrayerButton /> */}
        {prayer && <PrayerCard userId={userId} prayer={prayer} isPrayerClickable={false}/>}
        {!isPrayerFetching && (
          <List className={classes.listRoot}>
            <ListItem divider>
              {comment.length === 0 ? (
                <ListItemAvatar>
                  <Avatar alt="user-profile-photo" src={userPictureUrl.data ? userPictureUrl.data.url : userPictureUrl} />
                </ListItemAvatar>
              ) : null}
              <TextField
                id="comment-on-quote"
                label="Share your thought"
                multiline
                rowsMax={4}
                value={comment}
                onChange={handleComment}
                variant="outlined"
              />
              {comment.length > 0 ? (
                <IconButton aria-label="Submit comment" onClick={handleSubmitComment}>
                  <SendIcon color="action" />
                </IconButton>
              ) : null}
            </ListItem>
          </List>
        )}
          {prayer?.comments?.map(comment => (
            <React.Fragment key={comment._id}>
              <List className={classes.listRoot}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="user-profile-photo" src={comment.author.googleAuthUser.picture} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.author.googleAuthUser.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {comment.comment}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
              <Divider light />
            </React.Fragment>
          ))}
      </Container>
    </main>
  );
}

export default Prayer;