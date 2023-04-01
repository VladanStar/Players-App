import { Injectable } from '@angular/core';
import {AngularFireDatabase,  AngularFireList} from "@angular/fire/compat/database";
import { Player } from '../models/player';
import { Observable, map } from 'rxjs';
import { list } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  list(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private db:AngularFireDatabase) { }



  getAll(): Observable<Player[]> {
    return this.db
      .list<Player>('/players')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            id: y.payload.key,
            ...(y.payload.val() as Player),
          }))
        )
      );
  }
  get(id: string): Observable<Player> {
    return this.db
      .object<Player>('/players/' + id)
      .snapshotChanges()
      .pipe(
        map((x: any) => ({
          id: x.payload?.key,
          ...(x.payload.val() as Player),
        }))
      );
  }
  update(PlayerId: string, Player: Player): void {
    this.db.object<Player>('/players/' + PlayerId).update(Player);
  }
  add(Player: Player) {
    this.db.list('/players').push(Player);
  }
  delete(playerId: any) {
    this.db.object<Player>('/players/' + playerId).remove();
  }


}
