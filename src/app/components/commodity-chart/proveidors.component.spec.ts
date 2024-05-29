import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveidorsComponent } from './proveidors.component';

describe('CommodityChartComponent', () => {
  let component: ProveidorsComponent;
  let fixture: ComponentFixture<ProveidorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveidorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveidorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
