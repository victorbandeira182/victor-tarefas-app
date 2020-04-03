import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface Tarefa {
  titulo: string;
  notas: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas: Observable<Tarefa[]>;

  constructor( private db: AngularFirestore) {
  }

  ngOnInit() {
    this.tarefasCollection = this.db.collection('/tarefas');
    this.tarefas = this.tarefasCollection.valueChanges();
  }

}
