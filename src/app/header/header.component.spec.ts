import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router, RouterModule } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should return true for isActive when current URL matches', () => {
    jest.spyOn(router, 'url', 'get').mockReturnValue('/');
    expect(component.isActive('')).toBe(true);
  });

  it('should return false for isActive when current URL does not match', () => {
    jest.spyOn(router, 'url', 'get').mockReturnValue('/favorites');
    expect(component.isActive('active')).toBe(false);
  });
});
