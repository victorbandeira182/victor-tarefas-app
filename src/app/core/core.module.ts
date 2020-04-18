import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTarefaComponent} from './components/add-tarefa/add-tarefa.component';
import {AddTarefaDialogComponent} from './components/add-tarefa/add-tarefa-dialog/add-tarefa-dialog.component';
import {EditTarefaComponent, EditTarefaComponentDialog} from './components/edit-tarefa/edit-tarefa.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {TarefaCardComponent} from './components/tarefa-card/tarefa-card.component';
import {StoreModule} from '@ngrx/store';
import {TarefaReducer} from './store/reducer/tarefa.reducer';
import {globalReducer} from './store/reducer/global.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TarefaEffect} from './store/effect/tarefa.effect';



@NgModule({
	declarations: [AddTarefaDialogComponent,
		AddTarefaComponent,
		EditTarefaComponentDialog,
		EditTarefaComponent,
		TarefaCardComponent],
	imports: [
		CommonModule,
		SharedModule,
		CoreRoutingModule,
		StoreModule.forFeature('core', globalReducer),
    EffectsModule.forFeature([TarefaEffect])


	],
	exports: [
		TarefaCardComponent,
		AddTarefaComponent
	],
	entryComponents: [AddTarefaDialogComponent, EditTarefaComponentDialog]

})
export class CoreModule {
}
