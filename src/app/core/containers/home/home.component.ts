import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {GetTarefaAction} from '../../store/actions/tarefa.action';
import {select, Store} from '@ngrx/store';
import {TarefaState} from '../../store/reducer/tarefa.reducer';
import {getTarefas} from '../../store/selector/tarefa.selector';

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

  title = 'victor-app';
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;

  constructor(private db: AngularFirestore,
              private store : Store<TarefaState>
  ) {
  }

  ngOnInit() {
  	this.store.dispatch(new GetTarefaAction());
  	this.tarefas$ = this.store.pipe(select(getTarefas))

  }

}
