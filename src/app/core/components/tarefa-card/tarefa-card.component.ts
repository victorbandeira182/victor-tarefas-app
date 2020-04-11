import {Component, OnInit, Input} from '@angular/core';
import {Tarefa} from '../add-tarefa/Tarefa';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AppComponent} from '../../../app.component';


@Component({
  selector: 'app-tarefa-card',
  templateUrl: './tarefa-card.component.html',
  styleUrls: ['./tarefa-card.component.css']

})
export class TarefaCardComponent implements OnInit {
  @Input() tarefa: Tarefa;
  durationInSeconds = 5;

  constructor(private db: AngularFirestore,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onDelete(tarefa) {
    this._snackBar.open('Tarefa ' + tarefa.titulo + ' foi deletada com sucesso', 'Dispensar', {
      duration: this.durationInSeconds * 500,
    });
    this.db.collection('/tarefas')
      .get()
      .subscribe((snapshot) => {
        snapshot.forEach(doc => {
          if (tarefa.titulo === doc.data().titulo && tarefa.notas === doc.data().notas) {
            this.db.collection('/tarefas').doc(doc.id).delete();
          }
        });
      });
  }
}
