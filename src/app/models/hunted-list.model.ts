import { TibiaCharacter } from './tibia-character.model';

export class HuntedList {
    id: number;
    name: string;
    tibiaCharacters: TibiaCharacter[];

    constructor(id: number, name: string, tibiaCharacters?: TibiaCharacter[]) {
        this.id = id;
        this.name = name;
        this.tibiaCharacters = tibiaCharacters;
    }
}
