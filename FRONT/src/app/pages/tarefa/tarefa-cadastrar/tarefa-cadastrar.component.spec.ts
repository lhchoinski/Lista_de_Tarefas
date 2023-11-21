import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCadastrarComponent } from './tarefa-cadastrar.component';

describe('TarefaCadastrarComponent', () => {
  let component: TarefaCadastrarComponent;
  let fixture: ComponentFixture<TarefaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaCadastrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
