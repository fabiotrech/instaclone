import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "react-router-dom";

type ProfileParams = {
  profile: string;
};

type ProfileProps = RouteComponentProps<ProfileParams>;

const Profile: FunctionComponent<ProfileProps> = ({ match }) => {
  return <h1>Profile {match.params.profile}</h1>;
};

export default Profile;
