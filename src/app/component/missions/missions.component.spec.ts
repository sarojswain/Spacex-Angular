import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MissionsComponent } from './missions.component';
import { AppService } from '../../app.service';

describe('MissionsComponent', () => {
  let component: MissionsComponent;
  let fixture: ComponentFixture<MissionsComponent>;
  let service: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [MissionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AppService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get spacex mission data', () => {
    const arr = [
      {
        missionPatch: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        missionName: 'FalconSat',
        flightNumber: 1,
        missionId: ['RAAABR'],
        launchYear: '2019',
        launchSuccess: true,
      },
      {
        missionPatch: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        missionName: 'FalconSat',
        flightNumber: 1,
        missionId: ['RAAABR'],
        launchYear: '2019',
        launchSuccess: true,
      },
    ];
    spyOn(service, 'fetchData').and.callThrough();
    expect(service.fetchData).toHaveBeenCalled();
  });
});
