import React, {Component} from 'react';

class RolesList extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        checkForUpdates();
    }


    checkForUpdates = () => {
        //Make an api call to get latest api data

        //Once the data is in, re-render component
    }

    render() {
        return (
            <div>
                I'm an independent component
            </div>
        );
    }
}

export default RolesList;