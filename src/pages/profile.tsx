import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { AccentButton } from "../theme";

const headerFakeData: ProfileHeaderProps = {
  avatarUrl: "https://via.placeholder.com/150x150",
  username: "",
  name: "Fabio Trech",
  publications: 25,
  followers: 63,
  followed: 124,
  description:
    "Quis id incididunt qui deserunt non aute non deserunt irure officia aliqua cillum. Dolor cupidatat consectetur cillum minim dolore minim tempor cupidatat eu. Cillum amet labore cillum fugiat ea. Fugiat dolore sint exercitation ex sit sit ad dolore ea enim aliquip incididunt sunt consequat. Aliquip veniam anim duis elit occaecat excepteur irure eiusmod.",
};

type ProfileParams = {
  username: string;
};

type ProfileProps = RouteComponentProps<ProfileParams>;

const Profile: FunctionComponent<ProfileProps> = ({ match }) => {
  headerFakeData.username = match.params.username;

  return <ProfileHeader {...headerFakeData} />;
};

export default Profile;

const ProfileHeaderBox = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  row-gap: 15px;

  .avatar {
    grid-row: 1 / 5;
    justify-self: center;
    border-radius: 100px;
  }
`;

const FollowBox = styled.div`
  span {
    font-size: 28px;
    margin-right: 20px;
  }
`;

const CountersBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 40px;
  font-size: 15px;
`;

const PresentationBox = styled.div`
  span {
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

type ProfileHeaderProps = {
  avatarUrl: string;
  username: string;
  name: string;
  description?: string;
  publications: number;
  followers: number;
  followed: number;
};

const ProfileHeader: FunctionComponent<ProfileHeaderProps> = ({
  avatarUrl,
  username,
  name,
  description,
  publications,
  followers,
  followed,
}) => {
  return (
    <ProfileHeaderBox>
      <img className="avatar" src={avatarUrl} alt={username} />
      <FollowBox>
        <span>{username}</span>
        <AccentButton type="button">Seguir</AccentButton>
      </FollowBox>
      <CountersBox>
        <span>
          <strong>{publications}</strong> publicaciones
        </span>
        <span>
          <strong>{followers}</strong> seguidores
        </span>
        <span>
          <strong>{followed}</strong> seguidos
        </span>
      </CountersBox>
      <PresentationBox>
        <span>{name}</span>
        <p>{description}</p>
      </PresentationBox>
    </ProfileHeaderBox>
  );
};
