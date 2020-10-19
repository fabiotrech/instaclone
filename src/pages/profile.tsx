import React, { FunctionComponent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { AccentButton } from "../theme";
import { FaHeart, FaComment } from "react-icons/fa";

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

const dummyPostImageUrl = "https://via.placeholder.com/290x290";

const postsFakeData: ProfilePostProps[] = [
  { id: "dwaf", likesCount: 2, commentsCount: 3, imgUrl: dummyPostImageUrl },
  { id: "gewf", likesCount: 34, commentsCount: 7, imgUrl: dummyPostImageUrl },
  { id: "g32", likesCount: 8, commentsCount: 11, imgUrl: dummyPostImageUrl },
  { id: "gasc", likesCount: 12, commentsCount: 23, imgUrl: dummyPostImageUrl },
];

type ProfileParams = {
  username: string;
};

type ProfileProps = RouteComponentProps<ProfileParams>;

const Profile: FunctionComponent<ProfileProps> = ({ match }) => {
  headerFakeData.username = match.params.username;

  return <ProfileHeader {...headerFakeData} />;
};

export default Profile;

/* Profile header component */

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
    <>
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
      <ProfileContentBox>
        {postsFakeData.map((post) => (
          <ProfilePost key={post.id} {...post} />
        ))}
      </ProfileContentBox>
    </>
  );
};

/* Profile post component */

type ProfilePostProps = {
  id: string;
  imgUrl: string;
  likesCount: number;
  commentsCount: number;
};

const ProfilePost: FunctionComponent<ProfilePostProps> = ({
  id,
  imgUrl,
  likesCount,
  commentsCount,
}) => {
  const [showOverlay, setOverlay] = useState(false);

  const handleMouseEnter = () => setOverlay(true);
  const handleMouseLeave = () => setOverlay(false);

  const overlay = (
    <ProfilePostOverlay
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>
        <FaHeart size="22" />
        {likesCount}
      </span>
      <span>
        <FaComment size="22" />
        {commentsCount}
      </span>
    </ProfilePostOverlay>
  );

  return (
    <ProfilePostBox
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgUrl} alt="" />
      {showOverlay && overlay}
    </ProfilePostBox>
  );
};

/* Styles */

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

const ProfileContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 25px;
  border-top: 1px solid #ccc;
  padding-top: 50px;
`;

const ProfilePostBox = styled.div`
  cursor: pointer;
  position: relative;

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  span {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    pointer-events: none;
  }
`;

const ProfilePostOverlay = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
