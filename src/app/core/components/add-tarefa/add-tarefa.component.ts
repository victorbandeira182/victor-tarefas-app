import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTarefaDialogComponent} from './add-tarefa-dialog/add-tarefa-dialog.component';


@Component({
  selector: 'app-add-tarefa',
  templateUrl: './add-tarefa.component.html',
  styleUrls: ['./add-tarefa.component.css']
})
export class AddTarefaComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(AddTarefaDialogComponent, {
      width: '60%',
      minHeight: '400px',
    });
  }
}

