// User Interface
export interface UserInterface {
    id: number;
    alias: string;
    name: string;
    avatar: string;
}

// User Class
export class User implements UserInterface {
    id: number;
    alias: string;
    name: string;
    avatar: string;
}



