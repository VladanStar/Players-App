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
  player:Player={

  }
  //   firstName: "",
  //   avatar: "",
  //   lastName: "",
  //   possition: "",
  //   number: 0,
  //   bestFoot: "",
  //   id: "",
  // }
  id:any;
  constructor(private playerService: PlayerService, private route:ActivatedRoute,
    private router:Router) {}
  ngOnInit(): void {
    this.playerService.getAll().subscribe((p) => (this.players = p));

    this.id= this.route.snapshot.paramMap.get("id")
    if(this.id){


    this.playerService.get(this.id).subscribe(p => {
     this.player = p;
     console.log(this.player);
   });
  }
  }

  deletePlayer(){
    let id = this.id as string;
    if(confirm("Da li ste sigurni?")){
      if(id){
    this.playerService.delete(this.id);
    this.router.navigate([""])

    }
  }
}
}
