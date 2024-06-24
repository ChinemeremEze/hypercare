export interface User {
    avatar: string;
    description: string;
    email: string;
    firstname: string;
    id: string;
    join_date: string;
    lastname: string;
    role: string;
    username: string;
}
export type UserContextType = {
    data: any;
    loading: boolean;
    error: Error | null;
    
};