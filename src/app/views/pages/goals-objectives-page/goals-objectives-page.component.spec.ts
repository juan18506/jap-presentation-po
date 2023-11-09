import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsObjectivesPageComponent } from './goals-objectives-page.component';

describe('GoalsObjectivesPageComponent', () => {
  let component: GoalsObjectivesPageComponent;
  let fixture: ComponentFixture<GoalsObjectivesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalsObjectivesPageComponent]
    });
    fixture = TestBed.createComponent(GoalsObjectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
