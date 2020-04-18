import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {TarefaReducer} from './core/store/reducer/tarefa.reducer';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSnackBarModule,
    MatStepperModule,
    CoreModule,
    StoreModule.forRoot([], {}),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

