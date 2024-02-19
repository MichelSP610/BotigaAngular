import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacioContrasenyaComponent } from './recuperacio-contrasenya.component';

describe('RecuperacioContrasenyaComponent', () => {
  let component: RecuperacioContrasenyaComponent;
  let fixture: ComponentFixture<RecuperacioContrasenyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacioContrasenyaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperacioContrasenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
