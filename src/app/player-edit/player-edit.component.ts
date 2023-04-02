import { Component, OnInit } from '@angular/core';
import { update } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit{

  id:any;
  player:Player = {
    firstName: "",
    avatar: "",
    lastName: "",
    possition: "",
    number: 0,
    bestFoot: "",
    id:"",
};
constructor(private playerServis:PlayerService,
  private route:ActivatedRoute,
  private router:Router){}
  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get("id")
    if(this.id){

    this.playerServis.get(this.id).subscribe(p => {
     this.player = p;
     console.log(this.player);
   });
  }
  }

  updatePlayer(f:NgForm){
    // console.log(f.value)
     let id =this.id as string;
    this.playerServis.update(id, f.value);
    window.alert('Player is Edited');

    this.router.navigate(["/"])

      }
}
