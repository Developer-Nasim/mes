import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <RolesList/>
                <MyHotlist/>
                <CandidateInfoRequest/>
                <JobApplicationList/>
                <YourCompletedForms/>
                <LatestClickedRoles/>
                <ContractorList/>
                <PlacementListforRecruiterProfile/>
            </div>
        );
    }
}

export default Profile;