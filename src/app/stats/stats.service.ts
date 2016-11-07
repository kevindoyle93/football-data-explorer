import { Injectable } from '@angular/core';

import { Match } from '../app.component';

@Injectable()
export class StatsService {

  constructor() { }

  getNumberOfWins(matches: Array<Match>): number {
    let wins = matches.filter(x => x.full_time_result === 'H');
    return wins.length;
  }

  getNumberOfDraws(matches: Array<Match>): number {
    let draws = matches.filter(x => x.full_time_result === 'D');
    return draws.length;
  }

  getNumberOfLoses(matches: Array<Match>): number {
    let loses = matches.filter(x => x.full_time_result === 'A');
    return loses.length;
  }

}
