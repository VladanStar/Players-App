import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import { Player } from '../models/player';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private db:AngularFireDatabase) { }

  getAll(): Observable<Player[]> {
    return this.db
      .list<Player>('/tasks')
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
      .object<Player>('/tasks/' + id)
      .snapshotChanges()
      .pipe(
        map((x: any) => ({
          id: x.payload?.key,
          ...(x.payload.val() as Player),
        }))
      );
  }
  update(PlayerId: string, Player: Player): void {
    this.db.object<Player>('/tasks/' + PlayerId).update(Player);
  }
  add(Player: Player) {
    this.db.list('/tasks').push(Player);
  }
  delete(PlayerId: any) {
    this.db.object<Player>('/tasks/' + PlayerId).remove();
  }
}
