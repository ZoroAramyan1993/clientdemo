import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshUserComponent } from './refresh-user.component';

describe('RefreshUserComponent', () => {
  let component: RefreshUserComponent;
  let fixture: ComponentFixture<RefreshUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
