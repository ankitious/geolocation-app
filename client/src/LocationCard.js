import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationPopUp from "./LocationPopUp";

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function LocationCard(props) {
    const { classes, location, updateLocations } = props;

    const deleteLocation = () => {
        const {deleteLocation} = props;
        const { id } = location;
        deleteLocation(id);
    };
    return (
        <Card style={{width: '25%', display: 'inline-block', margin: '10px'}} className={classes.card}>
            <CardContent style={{paddingBottom: '0px'}}>
                <Typography variant="h5" component="h2">
                    {location.place}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {location.location}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Latitude : {location.latitude}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Longitude : {location.longitude}
                </Typography>
            </CardContent>
            <CardActions>
                <LocationPopUp location={location} updateLocations={updateLocations} text={"Edit Location"} />
                <Button variant="outlined" color="primary" onClick={deleteLocation}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

LocationCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationCard);
