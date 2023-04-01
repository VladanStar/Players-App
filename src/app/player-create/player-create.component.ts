import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../services/player.service';
import { PlayerTableComponent } from '../player-table/player-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
})
export class PlayerCreateComponent implements OnInit {
  constructor(private playerService: PlayerService, private router: Router) {}
  ngOnInit(): void {}

  addPlayer(f: NgForm) {
    // console.log(f.value)

    this.playerService.add(f.value);

    window.alert('Player added');
    this.router.navigate(['']);
  }
}
