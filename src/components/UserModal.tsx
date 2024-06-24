import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: any;
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User Details"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <ModalHeader>
        <Avatar alt={user.username} src={user.avatar.split("?")[0]} />
        <h2>{`${user.firstname} ${user.lastname}`}</h2>
      </ModalHeader>

      <p data-testid="username"><strong>Username:</strong> {user.username}</p>
      <p data-testid="email"><strong>Email:</strong> {user.email}</p>
      <p data-testid="role"><strong>Role:</strong> {user.role}</p>
      <p data-testid="description"><strong>Description:</strong> {user.description}</p>

      <ModalFooter>
        <p data-testid="join-date">Join Date: {user.join_date}</p>
        <CloseButton data-testid="close-button" onClick={onClose}>Close</CloseButton>
      </ModalFooter>


    </Modal>
  );
};
const ModalHeader = styled.div`
  display: flex;
  border: 0.2px solid red;
  background-color: whitesmoke;
  border-radius: 8px;
`;

const Avatar = styled.img`
  width: 100px;
`;
const CloseButton = styled.button`
    background-color: black;
    color: white;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  p{
    font-weight: 200;
  }
`;
export default UserModal;