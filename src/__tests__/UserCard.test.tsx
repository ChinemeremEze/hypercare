import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from '../components/UserCard';
import { describe, it, expect, vi } from 'vitest';

describe('UserCard Component', () => {
    const user = {
        username: 'tjeffordv',
        avatar: 'https://robohash.org/johndoe.png',
        firstname: 'Travis',
        lastname: 'Jefford',
        role: 'Project Manager',
    };

    beforeEach(() => {
        // Mock dependencies as needed
        vi.mock('@mui/material/ImageListItem', () => ({
            __esModule: true,
            default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
        }));
    });

    it('renders user information correctly', () => {
        render(<UserCard user={user} onClick={() => { }} />);

        // Assert that user information is displayed correctly
        expect(screen.getByText(`${user.firstname} ${user.lastname}`)).toBeInTheDocument();
        expect(screen.getByText(`@${user.username}`)).toBeInTheDocument();

    });

    it('calls onClick function when the button is clicked', () => {
        const onClickMock = vi.fn();
        render(<UserCard user={user} onClick={onClickMock} />);

        // Simulate button click
        const button = screen.getByRole('button', { name: /view more/i });
        button.click();

        // Expect the onClick function to have been called
        expect(onClickMock).toHaveBeenCalled();
    });

});