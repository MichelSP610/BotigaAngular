import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioUsuariComponent } from './informacio-usuari.component';

describe('InformacioUsuariComponent', () => {
  let component: InformacioUsuariComponent;
  let fixture: ComponentFixture<InformacioUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacioUsuariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacioUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
