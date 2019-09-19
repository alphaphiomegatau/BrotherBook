import React from 'react';
import { IBrotherCard } from '../interfaces/IBrotherCard';
import { Card, CardContent, Typography, CardMedia, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    card: {
      width: '100%',
      maxWidth: 800,
      marginBottom: 7,
      display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        flex: '1 0 auto',
    },
    brotherPic: {
        width: 250,
        maxWidth: 250,
        maxHeight: 250,
    },
    
});

const BrotherCard = React.memo<IBrotherCard>(({brother}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.brotherPic} image='photos/example.jpg'/>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                        <Typography component='h5' variant='h5'>{`${brother.firstName} ${brother.middleName} ${brother.lastName} #${brother.brotherNumber}`}</Typography>
                        <Typography component='div'>
                            <Box fontWeight='fontWeightBold'>Pledge Class: </Box>
                            <Box>{brother.pledgeClass}</Box>
                        </Typography>
                        <Typography component='div'>
                            <Box fontWeight='fontWeightBold'>Family: </Box>
                            <Box>{brother.family}</Box>
                        </Typography>
                        <Typography component='div'>
                            <Box fontWeight='fontWeightBold'>Nickname: </Box>
                            <Box>{brother.nickname}</Box>
                        </Typography>
                        <Typography component='div'>
                            <Box fontWeight='fontWeightBold'>Positions: </Box>
                            <Box>{(brother.positions && brother.positions.length > 0) || 'None Found'}</Box>
                        </Typography>
                        <Typography component='div'>
                            <Box fontWeight='fontWeightBold'>Line: </Box>
                            <Box>{brother.line || 'None Found'}</Box>
                        </Typography>
                </CardContent>
                <CardContent className={classes.content}>
                    {/* TODO: Buttons for visuals will go here */}
                </CardContent>
            </div>
        </Card>
    )
})

export default BrotherCard;
