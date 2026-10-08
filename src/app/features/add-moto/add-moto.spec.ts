import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoto } from './add-moto';

describe('AddMoto', () => {
  let component: AddMoto;
  let fixture: ComponentFixture<AddMoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoto],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
