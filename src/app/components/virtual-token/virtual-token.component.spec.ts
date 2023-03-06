import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTokenComponent } from './virtual-token.component';

describe('VirtualTokenComponent', () => {
  let component: VirtualTokenComponent;
  let fixture: ComponentFixture<VirtualTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
