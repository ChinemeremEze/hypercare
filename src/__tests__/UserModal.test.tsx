
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserModal from '../components/UserModal';
import { vi } from 'vitest';


// Mock the react-modal library
vi.mock('react-modal', () => ({
    __esModule: true,
    default: ({ isOpen, onRequestClose, children, contentLabel }: any) =>
        isOpen ? (
            <div aria-label={contentLabel}>
                <button data-testid="mock-close-button" onClick={onRequestClose}>Close</button>
                {children}
            </div>
        ) : null,
}));

describe('UserModal Component', () => {
    const user = {
        username: 'inibleyo',
        avatar: 'https://robohash.org/eosmagniratione.png',
        firstname: 'Iago',
        lastname: 'Nibley',
        email: 'inibleyo@ibm.com',
        role: 'Engineer',
        description: 'Suspendisse accumsan tortor quis turpis. Sed ante.',
        join_date: '2024-04-10',
    };

    it('renders user details correctly when open', () => {
        render(<UserModal isOpen={true} onClose={() => { }} user={user} />);

        expect(screen.getByLabelText('User Details')).toBeInTheDocument();
        expect(screen.getByText(`${user.firstname} ${user.lastname}`)).toBeInTheDocument();
        expect(screen.getByTestId('username')).toHaveTextContent(`Username: ${user.username}`);
        expect(screen.getByTestId('email')).toHaveTextContent(`Email: ${user.email}`);
        expect(screen.getByTestId('role')).toHaveTextContent(`Role: ${user.role}`);
        expect(screen.getByTestId('description')).toHaveTextContent(`Description: ${user.description}`);
        expect(screen.getByTestId('join-date')).toHaveTextContent(`Join Date: ${user.join_date}`);
        expect(screen.getByTestId('close-button')).toBeInTheDocument();
    });
    it('does not render when closed', () => {
        render(<UserModal isOpen={false} onClose={() => { }} user={user} />);

        expect(screen.queryByLabelText('User Details')).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onCloseMock = vi.fn();
        render(<UserModal isOpen={true} onClose={onCloseMock} user={user} />);

        const closeButton = screen.getByTestId('mock-close-button');
        fireEvent.click(closeButton);

        expect(onCloseMock).toHaveBeenCalled();
    });
});
