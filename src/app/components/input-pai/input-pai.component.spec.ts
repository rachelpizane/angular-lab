import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPaiComponent } from './input-pai.component';

describe('InputPaiComponent', () => {
  let component: InputPaiComponent;
  let fixture: ComponentFixture<InputPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
