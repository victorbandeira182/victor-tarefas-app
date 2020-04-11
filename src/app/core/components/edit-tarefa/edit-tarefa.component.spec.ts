import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTarefaComponent} from './edit-tarefa.component';

describe('EditPatientComponent', () => {
  let component: EditTarefaComponent;
  let fixture: ComponentFixture<EditTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTarefaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
