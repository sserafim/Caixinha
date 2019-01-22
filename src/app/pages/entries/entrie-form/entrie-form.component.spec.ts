import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieFormComponent } from './entrie-form.component';

describe('EntrieFormComponent', () => {
  let component: EntrieFormComponent;
  let fixture: ComponentFixture<EntrieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
