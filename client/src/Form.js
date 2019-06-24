import React from 'react';
import LocationCard from "./LocationCard";
import connect from "react-redux/es/connect/connect";
import {fetchLocations, updateLocations} from "./store/actions";
import LocationPopUp from "./LocationPopUp";

class Form extends React.Component {

    componentDidMount() {
        this.props.fetchLocations();
    }

    updateLocations = (location) => {
        const {locations} = this.props;
        if(locations.find(l => l.id === location.id)) {
           const updatedLocations = locations.map(l => l.id === location.id ? location : l);
            this.props.updateLocations(updatedLocations);
        }
        else {
            this.props.updateLocations([...this.props.locations, location]);
        }
    };

    deleteLocation = (id) => {
      const updatedLocations = this.props.locations.filter(l => l.id !== id);
      this.props.updateLocations(updatedLocations);
    };

    render() {
        const { locations } = this.props;
        return (
            <div style={{marginLeft: '52%', paddingTop : '1%',width: '100%'}}>
                <div>
                    <LocationPopUp text={"Add Location"} updateLocations={this.updateLocations}/>
                </div>
                <hr style={{borderTop: '1px solid #d3d3d3'}}/>

                { locations.length > 0
                    &&
                   locations.map(location => <LocationCard key={location.id} updateLocations={this.updateLocations} deleteLocation={this.deleteLocation} location={location}/>)
                }
            </div>
        );
    }
}

export const mapStateToProps = state => {
    const { locations : locationsData } = state;
    const {  locations } = locationsData || {
        locations : []
    };
    return {
        locations
    };
};
const mapDispatchToProps = { updateLocations, fetchLocations };
export default connect(mapStateToProps,mapDispatchToProps)(Form);
