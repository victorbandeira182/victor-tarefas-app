import {createSelector} from '@ngrx/store';
import {coreState, getCoreState} from '../reducer/global.reducer';
import {TarefaState} from '../reducer/tarefa.reducer';


export const selectTarefaState = createSelector(getCoreState,  (state: coreState) => {
	return state.tarefas_store;
});

export const getTarefas = createSelector(selectTarefaState, (state: TarefaState) =>
  state.TarefaList);


