import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaticonComponent } from './chaticon.component';

describe('ChaticonComponent', () => {
  let component: ChaticonComponent;
  let fixture: ComponentFixture<ChaticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
