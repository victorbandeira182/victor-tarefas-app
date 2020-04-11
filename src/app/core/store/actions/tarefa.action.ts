import {Action} from '@ngrx/store';
import {Tarefa} from '../../components/add-tarefa/Tarefa';


export const CREATE_TAREFA = '[TAREFA] Create TAREFA';
export const CREATE_TAREFA_SUCCESS = '[TAREFA] Create TAREFA Success';
export const CREATE_TAREFA_FAIL = '[TAREFA] Create TAREFA Fail';

export const GET_TAREFA = '[TAREFA] Get TAREFA';
export const GET_TAREFA_SUCCESS = '[TAREFA] Get TAREFA Success';
export const GET_TAREFA_FAIL = '[TAREFA] Get TAREFA Fail';

export const UPDATE_TAREFA = '[TAREFA] Update TAREFA';
export const UPDATE_TAREFA_SUCCESS = '[TAREFA] Update TAREFA Success';
export const UPDATE_TAREFA_FAIL = '[TAREFA] Update TAREFA Fail';

export const DELETE_TAREFA = '[TAREFA] Delete TAREFA';
export const DELETE_TAREFA_SUCCESS = '[TAREFA] Delete TAREFA Success';
export const DELETE_TAREFA_FAIL = '[TAREFA] Delete TAREFA Fail';


//---------------------------------------------- Actions de Criar ------------------------------

export class CreateTarefaAction implements Action {
  readonly type = CREATE_TAREFA;

  constructor(public payload: Tarefa) {
  }
}

export class CreateTarefaSuccessAction implements Action {
  readonly type = CREATE_TAREFA_SUCCESS;
}

export class CreateTarefaFailAction implements Action {
  readonly type = CREATE_TAREFA_FAIL;

  constructor(public payload: (error: any) => Tarefa[]) {
  }
}

//---------------------------------------------- Actions de Obter ------------------------------
export class GetTarefaAction implements Action {
  readonly type = GET_TAREFA;

  constructor() {
  }
}

export class GetTarefaSuccessAction implements Action {
  readonly type = GET_TAREFA_SUCCESS;

  constructor(public payload: Tarefa[]) {
  }
}

export class GetTarefaFailAction implements Action {
  readonly type = GET_TAREFA_FAIL;

  constructor(public payload: (error: any) => Tarefa[]) {
  }
}

//---------------------------------------------- Actions de Editar ------------------------------

export class UpdateTodoAction implements Action {
  readonly type = UPDATE_TAREFA;

  constructor(public payload: Tarefa) {
  }
}

export class UpdateTodoSuccessAction implements Action {
  readonly type = UPDATE_TAREFA_SUCCESS;
}

export class UpdateTodoFailAction implements Action {
  readonly type = UPDATE_TAREFA_FAIL;

  constructor(public payload: (error: any) => Tarefa[]) {
  }
}

//---------------------------------------------- Actions de Deletar ------------------------------
export class DeleteTarefaAction implements Action {
  readonly type = DELETE_TAREFA;

  constructor(public payload: Tarefa) {
  }
}

export class DeleteTarefaSuccessAction implements Action {
  readonly type = DELETE_TAREFA_SUCCESS;
}

export class DeleteTarefaFailAction implements Action {
  readonly type = DELETE_TAREFA_FAIL;

  constructor(public payload: (error: any) => Tarefa[]) {
  }
}


//---------------------------------------------- Tarefa Actions Types ------------------------------

export type TarefaActionsTypes =
  | CreateTarefaAction
  | CreateTarefaSuccessAction
  | CreateTarefaFailAction
  | GetTarefaAction
  | GetTarefaSuccessAction
  | GetTarefaFailAction
  | UpdateTodoAction
  | UpdateTodoSuccessAction
  | UpdateTodoFailAction
  | DeleteTarefaAction
  | DeleteTarefaSuccessAction
  | DeleteTarefaFailAction



