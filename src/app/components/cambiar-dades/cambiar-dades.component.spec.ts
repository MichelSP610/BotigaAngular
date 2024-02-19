import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarDadesComponent } from './cambiar-dades.component';

describe('CambiarDadesComponent', () => {
  let component: CambiarDadesComponent;
  let fixture: ComponentFixture<CambiarDadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarDadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambiarDadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
