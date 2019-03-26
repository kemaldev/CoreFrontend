import { TibiaCharacter } from './tibia-character.model';

export class HuntedList {
    id: number;
    name: string;
    amountOnline: number;
    tibiaCharacters: TibiaCharacter[];

    constructor(id: number, name: string, tibiaCharacters?: TibiaCharacter[], amountOnline: number = 0) {
        this.id = id;
        this.name = name;
        this.amountOnline = amountOnline;
        this.tibiaCharacters = tibiaCharacters;
    }
}
