import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirProducteComponent } from './afegir-producte.component';

describe('AfegirProducteComponent', () => {
  let component: AfegirProducteComponent;
  let fixture: ComponentFixture<AfegirProducteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfegirProducteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfegirProducteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
