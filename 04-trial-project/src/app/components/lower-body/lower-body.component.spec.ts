import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerBodyComponent } from './lower-body.component';

describe('LowerBodyComponent', () => {
  let component: LowerBodyComponent;
  let fixture: ComponentFixture<LowerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
