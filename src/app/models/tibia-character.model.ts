import { HuntingPlace } from './hunting-place.model';
export class TibiaCharacter {
    id: number;
   name: string;
   vocation: string;
   level: number;
   guild: string;
   residence: string;
   latestDeathBy: string;
   lastLogin: Date;
   latestDeath: Date;
   huntingPlaces: HuntingPlace[];

  constructor(
    id: number,
    name: string,
    vocation: string,
    level: number,
    guild: string,
    residence: string,
    latestDeathBy: string,
    lastLogin: Date,
    latestDeath: Date,
    huntingPlaces: HuntingPlace[]
  ) {
    this.id = id;
    this.name = name;
    this.vocation = vocation;
    this.level = level;
    this.guild = guild;
    this.residence = residence;
    this.latestDeathBy = latestDeathBy;
    this.lastLogin = lastLogin;
    this.latestDeath = latestDeath;
    this.huntingPlaces = huntingPlaces;
  }

}
