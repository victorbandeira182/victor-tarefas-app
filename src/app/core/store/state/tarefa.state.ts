import {Tarefa} from '../../components/add-tarefa/Tarefa';

export interface TarefaState {
  Loading: boolean;
  Loaded: boolean;
  TarefaList: Tarefa[];
}

export const initializeState = (): TarefaState => {
  return ({
    Loading: false,
    Loaded: true,
    TarefaList: [],
  });
};
