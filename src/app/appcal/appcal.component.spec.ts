import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcalComponent } from './appcal.component';

describe('AppcalComponent', () => {
  let component: AppcalComponent;
  let fixture: ComponentFixture<AppcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
