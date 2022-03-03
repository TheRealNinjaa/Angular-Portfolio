import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkoneComponent } from './linkone.component';

describe('LinkoneComponent', () => {
  let component: LinkoneComponent;
  let fixture: ComponentFixture<LinkoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
