import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateServices } from './admin-create-services';

describe('AdminCreateServices', () => {
  let component: AdminCreateServices;
  let fixture: ComponentFixture<AdminCreateServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
