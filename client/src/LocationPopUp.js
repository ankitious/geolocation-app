import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as uuid from "uuid";


class LocationPopUp extends React.Component {
    state = {
        open: false,
        id : '',
        place : '',
        latitude : '',
        longitude : '',
    };

    componentDidMount() {
        const {text, location } = this.props;
        if(text === 'Edit Location') {
            const {place, latitude, longitude, id} = location;
            this.setState({ place, latitude, longitude, id })
        } else {
            this.setState({id : uuid()})
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        const { updateLocations, text }  = this.props;
        const { place, latitude,  longitude, id}  = this.state;
        updateLocations({ place, latitude,  longitude, id : text === 'Add Location' ? uuid() : id});
        this.setState({ open: false});
    };

    onChange = (e) => {
        this.setState({ [e.target.name]:e.target.value})
    };

    render() {
        const { place, latitude, longitude} = this.state;
        const { text } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    {text}
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{text}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Search for location
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="place"
                            label="Location Name"
                            type="text"
                            fullWidth
                            required
                            value={place}
                            onChange={this.onChange}
                            placeholder={'Berlin'}
                        />
                        <TextField
                            margin="dense"
                            name="latitude"
                            label="Latitude"
                            type="number"
                            fullWidth
                            required
                            value={latitude}
                            onChange={this.onChange}
                            placeholder={'52.5200'}
                        />
                        <TextField
                            margin="dense"
                            name="longitude"
                            label="Longitude"
                            type="number"
                            fullWidth
                            required
                            value={longitude}
                            onChange={this.onChange}
                            placeholder={'13.4050'}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default LocationPopUp;

