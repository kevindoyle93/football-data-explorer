import {Component, OnInit} from '@angular/core';
import {MatchService} from "./match-service.service";

import "./rxjs-operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Team';
  mode = 'Observable';
  errorMessage: string;

  teamName = 'Manchester United';
  matches: Match[];

  constructor (private matchService: MatchService) {}

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches().subscribe(
      matches => this.matches,
      error => this.errorMessage = <any>error
    );
  }
}

export class Match {
  date: string;
  home_team: string;
  away_team: string;
  full_time_home_goals: number;
  full_time_away_goals: number;
  half_time_home_goals: number;
  half_time_away_goals: number;
  full_time_result: string;
  half_time_result: string;
  home_possession: number;
  away_possession: number;
  home_total_shots: number;
  away_total_shots: number;
  home_shots_on_target: number;
  away_shots_on_target: number;
  home_corners: number;
  away_corners: number;
  home_fouls_committed: number;
  away_fouls_committed: number;
  home_yellow_cards: number;
  away_yellow_cards: number;
  home_red_cards: number;
  away_red_cards: number;
}
