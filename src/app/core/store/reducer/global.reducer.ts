import {TarefaReducer, TarefaState} from './tarefa.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface coreState {
  tarefas_store : TarefaState;

}

export const globalReducer : ActionReducerMap<coreState> = {
  tarefas_store : TarefaReducer
}

export const getCoreState = createFeatureSelector<coreState>('core')
