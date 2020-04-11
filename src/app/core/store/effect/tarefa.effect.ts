import {Injectable} from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import {Tarefa} from '../../components/add-tarefa/Tarefa';

import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  GetTarefaSuccessAction,
  GetTarefaFailAction,

  CreateTarefaSuccessAction,
  CreateTarefaFailAction,

  GET_TAREFA,
  CREATE_TAREFA,
  UPDATE_TAREFA,
  DELETE_TAREFA

} from '../actions/tarefa.action';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, catchError, pluck, exhaustMap} from 'rxjs/operators';


@Injectable()
export class TarefaEffect {
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;


  constructor(
    private actions$: Actions,
    private db: AngularFirestore,
  ) {
  }


  // -------------------------------------------GET----------------------------------------------


}
