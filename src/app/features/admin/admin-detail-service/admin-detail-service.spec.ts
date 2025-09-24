import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailService } from './admin-detail-service';

describe('AdminDetailService', () => {
  let component: AdminDetailService;
  let fixture: ComponentFixture<AdminDetailService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetailService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
