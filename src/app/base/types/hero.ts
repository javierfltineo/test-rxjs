// Hero Interface
export interface HeroInterface {
    id: number;
    name: string;
    alias: string;
    hability: string;
    birthDate: string;
    race: string;
    isAlive: boolean;
    canFly: boolean;
    civilStatus: string;
    numberOfMovies: number;
    urlImage: string;
}

// Hero Class
export class Hero implements HeroInterface {
    id: number;
    name: string;
    alias: string;
    hability: string;
    birthDate: string;
    race: string;
    isAlive: boolean;
    canFly: boolean;
    civilStatus: string;
    numberOfMovies: number;
    urlImage: string;
}



