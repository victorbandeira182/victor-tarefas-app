import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTarefaDialogComponent} from './add-tarefa-dialog.component';

describe('AddTarefaDialogComponent', () => {
  let component: AddTarefaDialogComponent;
  let fixture: ComponentFixture<AddTarefaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTarefaDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTarefaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
