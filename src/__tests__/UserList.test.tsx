// src/components/UserList.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../pages/UserList';
import { useUser } from '../contexts/UserContext';
import { vi } from 'vitest';

// Mocking the necessary components
vi.mock('../contexts/UserContext');
vi.mock('@mui/material', async () => {
  const originalModule = await vi.importActual('@mui/material');
  return {
    ...originalModule,
    useTheme: () => ({
      breakpoints: {
        down: () => '',
        up: () => '',
      },
    }),
    useMediaQuery: () => false,
    ImageList: ({ children }: { children: React.ReactNode }) => <div data-testid="image-list">{children}</div>,
  };
});
vi.mock('../components/UserCard', () => ({ default: ({ user, onClick }: any) => <div data-testid="user-card" onClick={onClick}>{user.name}</div> }));
vi.mock('../components/UserModal', () => ({ default: ({ isOpen, onClose, user }: any) => isOpen ? <div data-testid="user-modal"><button data-testid="close-modal" onClick={onClose}>Close</button>{user.name}</div> : null }));
vi.mock('../components/Loading', () => ({ default: () => <div>Loading data...</div> }));
vi.mock('../components/Error', () => ({ default: () => <div>Error loading data...</div> }));

describe('UserList Component', () => {
  it('renders loading state initially', () => {
    (useUser as jest.Mock).mockReturnValue({ data: null, loading: true, error: null });
    render(<UserList />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useUser as jest.Mock).mockReturnValue({ data: null, loading: false, error: true });
    render(<UserList />);
    expect(screen.getByText('Error loading data...')).toBeInTheDocument();
  });

  it('renders user cards and handles load more', () => {
    const mockData = {
      data: {
        users: Array.from({ length: 20 }, (_, i) => ({ name: `User ${i}` })),
      },
    };
    (useUser as jest.Mock).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<UserList />);

    expect(screen.getAllByTestId('user-card')).toHaveLength(16);

    const loadMoreButton = screen.getByText('Load More');
    fireEvent.click(loadMoreButton);

    expect(screen.getAllByTestId('user-card')).toHaveLength(20);
  });

  it('opens and closes modal on user card click', () => {
    const mockData = {
      data: {
        users: [{ name: 'User 1' }, { name: 'User 2' }],
      },
    };
    (useUser as jest.Mock).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<UserList />);

    const userCard = screen.getByText('User 1');
    fireEvent.click(userCard);

    expect(screen.getByTestId('user-modal')).toHaveTextContent('User 1');

    const closeButton = screen.getByTestId('close-modal');
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('user-modal')).not.toBeInTheDocument();
  });
});
