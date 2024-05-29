import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioTransaccionsComponent } from './informacio-transaccions.component';

describe('InformacioTransaccionsComponent', () => {
  let component: InformacioTransaccionsComponent;
  let fixture: ComponentFixture<InformacioTransaccionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacioTransaccionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacioTransaccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
