import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPointPageComponent } from './entry-point-page.component';

describe('EntryPointPageComponent', () => {
  let component: EntryPointPageComponent;
  let fixture: ComponentFixture<EntryPointPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryPointPageComponent]
    });
    fixture = TestBed.createComponent(EntryPointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
