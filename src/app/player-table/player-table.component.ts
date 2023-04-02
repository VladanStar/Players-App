import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css'],
})
export class PlayerTableComponent implements OnInit {
  players: Player[] = [];
  player: Player = {};
  //   firstName: "",
  //   avatar: "",
  //   lastName: "",
  //   possition: "",
  //   number: 0,
  //   bestFoot: "",
  //   id: "",
  //  }
  id: any;
  showDeletedMessage: boolean = true;
  searchText:any;
  totalLength: any;
  page: number = 1;
  p: any;
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playerService.getAll().subscribe((players) => {
      this.players = players;
    });
  }

  deletePlayer(id: any) {
    if (confirm('Are you sure you want to delete this player?')) {
      this.playerService.delete(id);
    }
  }
}
