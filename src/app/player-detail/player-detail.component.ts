import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent  implements OnInit{

  id:any;

 player:Player={}
constructor(private playerServis:PlayerService, private route:ActivatedRoute,
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
}
