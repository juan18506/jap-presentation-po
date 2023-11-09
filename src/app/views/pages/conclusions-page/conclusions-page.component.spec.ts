import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionsPageComponent } from './conclusions-page.component';

describe('ConclusionsPageComponent', () => {
  let component: ConclusionsPageComponent;
  let fixture: ComponentFixture<ConclusionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionsPageComponent]
    });
    fixture = TestBed.createComponent(ConclusionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
