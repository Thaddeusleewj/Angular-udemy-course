import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperBodyComponent } from './upper-body.component';

describe('UpperBodyComponent', () => {
  let component: UpperBodyComponent;
  let fixture: ComponentFixture<UpperBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
