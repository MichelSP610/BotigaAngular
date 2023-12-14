import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacitatComponent } from './privacitat.component';

describe('PrivacitatComponent', () => {
  let component: PrivacitatComponent;
  let fixture: ComponentFixture<PrivacitatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacitatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
