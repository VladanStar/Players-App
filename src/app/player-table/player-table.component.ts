import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css'],
})
export class PlayerTableComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService, private router: Router) {}
  ngOnInit(): void {
    this.playerService.getAll().subscribe((p) => (this.players = p));
  }
}
