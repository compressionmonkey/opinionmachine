import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficenotfoundComponent } from './officenotfound.component';

describe('OfficenotfoundComponent', () => {
  let component: OfficenotfoundComponent;
  let fixture: ComponentFixture<OfficenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
