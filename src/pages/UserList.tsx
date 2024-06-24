import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import UserModal from '../components/UserModal';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { ImageList, useTheme, useMediaQuery } from '@mui/material';

const UserList: React.FC = () => {
  const { data, loading, error } = useUser<any>();
  const [selectedUser, setSelectedUser] = useState<any>(null); // State to track selected user for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [itemsToShow, setItemsToShow] = useState(16);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('xl'));

  let cols = 4; // Default to 4 columns

  if (isLg) {
    cols = 4;
  } else if (isMd) {
    cols = 3;
  } else if (isSm) {
    cols = 2;
  } else if (isXs) {
    cols = 1;
  }

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 8); // Load 8 more items when clicked
  };

  const handleCardClick = (user: any) => {
    setSelectedUser(user); // Set the selected user to show in the modal
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (loading) return <Loading text="Loading data..." />;
  if (error) return <Error />;


  // Guard clause to ensure data is available before slicing
  const currentItems = data && data.data.users.slice(0, itemsToShow);

  return (
    data ?
      <Wrapper>
        <ImageList cols={cols} gap={8}  >
          {currentItems.map((user: any, index: number) => (
            <UserCard key={index} user={user} onClick={() => handleCardClick(user)} />
          ))}
        </ImageList>
        {selectedUser &&
          <UserModal isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
        }

        <Pagination>
          <button onClick={handleLoadMore} >Load More</button>
        </Pagination>
      </Wrapper>
      :
      <Error />
  );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Pagination = styled.div`
    padding-top: 1em;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        background-color: black;
        color: white;
        margin-bottom: 30px;
    }
    button:hover{
        opacity: 0.7;
    }
`;

export default UserList;
