import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieListComponent } from './entrie-list.component';

describe('EntrieListComponent', () => {
  let component: EntrieListComponent;
  let fixture: ComponentFixture<EntrieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
