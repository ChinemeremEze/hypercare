import React from 'react';
import styled from 'styled-components';
import ImageListItem from '@mui/material/ImageListItem';


type UserCardProps = {
    user: any;
    onClick: () => void;
};

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {

    return (
    <ImageListItem style={{overflow: "scroll"}}>
      <Wrapper style={{ border: '1px solid #ccc', borderRadius: '8px', width: '300px', padding:"1em" }}>
        <AvatarWrapper>
            <Avatar src={user.avatar.split("?")[0]} alt={`${user.firstname} ${user.lastname}`} />
        </AvatarWrapper>
        <Name>{`${user.firstname} ${user.lastname}`}</Name>
        <UserName>@{user.username}</UserName>
        <p><strong>Role:</strong> {user.role}</p>
        <CardButton onClick={onClick}>View More </CardButton>
      </Wrapper>
    </ImageListItem>
    );
};
const Wrapper = styled.div`
`;

const AvatarWrapper = styled.div`
    background-color: lightgray;
    height: 200px;
`
const Avatar = styled.img`
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 10px;
`;
const Name = styled.p`
    font-size: 1.2em;

`;
const UserName = styled.p`
    font-weight: 200;
`;
const CardButton = styled.button`
    background-color: red;
`;
export default UserCard;