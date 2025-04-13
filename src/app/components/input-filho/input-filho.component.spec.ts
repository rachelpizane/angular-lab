import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilhoComponent } from './input-filho.component';

describe('InputFilhoComponent', () => {
  let component: InputFilhoComponent;
  let fixture: ComponentFixture<InputFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFilhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
