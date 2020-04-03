import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './core/containers/toolbar/toolbar.component';
import {AddTarefaComponent} from './core/components/add-tarefa/add-tarefa.component';
import {TarefaCardComponent} from './core/components/tarefa-card/tarefa-card.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {ConfigService} from './core/services/config.service';
import * as $ from 'jquery';
import {EditTarefaComponent, EditTarefaComponentDialog} from './core/components/edit-tarefa/edit-tarefa.component';
import {MaterialModule} from './shared/material/material.module';
import { AddTarefaDialogComponent } from './core/components/add-tarefa/add-tarefa-dialog/add-tarefa-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
		ToolbarComponent,
    AddTarefaComponent,
    TarefaCardComponent,
    routingComponents,
    EditTarefaComponent,
    EditTarefaComponentDialog,
    AddTarefaDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTarefaDialogComponent, EditTarefaComponentDialog]
})
export class AppModule {
}

