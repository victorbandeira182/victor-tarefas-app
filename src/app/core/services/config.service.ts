import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

interface Tarefa {
  titulo: string;
  notas: string;

}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;

  constructor(private db: AngularFirestore) {
  }

  loadConfig(): any {
    return new Promise((resolve, reject) => {
      this.tarefasCollection = this.db.collection('/tarefas');
      this.tarefas$ = this.tarefasCollection.valueChanges();
      setTimeout(() => resolve(true), 2000);

    });
  }

}
