import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarEmailComponent } from './enviar-email.component';

describe('EnviarEmailComponent', () => {
  let component: EnviarEmailComponent;
  let fixture: ComponentFixture<EnviarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
