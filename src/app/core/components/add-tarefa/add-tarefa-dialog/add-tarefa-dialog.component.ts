import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Tarefa} from './Tarefa';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Component({
  selector: 'app-add-tarefa-dialog',
  templateUrl: './add-tarefa-dialog.component.html',
  styleUrls: ['./add-tarefa-dialog.component.css']
})
export class AddTarefaDialogComponent implements OnInit {
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas$: Observable<Tarefa[]>;

  form;

  checked = false;

  ngOnInit() {
    this.tarefasCollection = this.db.collection('/tarefas');
    this.tarefas$ = this.tarefasCollection.valueChanges();

    this.form = new FormGroup({
      titulo: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')])),
      notas: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')])),
    });
  }

  constructor(private db: AngularFirestore,
              public dialogRef: MatDialogRef<AddTarefaDialogComponent>,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(tarefa) {
    this.tarefasCollection.add(tarefa);
  }

}
