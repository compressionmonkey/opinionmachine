import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficefoundComponent } from './officefound.component';

describe('OfficefoundComponent', () => {
  let component: OfficefoundComponent;
  let fixture: ComponentFixture<OfficefoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficefoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
