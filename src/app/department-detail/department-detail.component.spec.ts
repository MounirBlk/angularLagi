import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { DepartmentDetailComponent } from './department-detail.component';

describe('DepartmentDetailComponent', () => {
  let component: DepartmentDetailComponent;
  let fixture: ComponentFixture<DepartmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [ DepartmentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
