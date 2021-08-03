import { AlbumService } from 'src/app/service/album.service';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumGridComponent } from './album-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpConfigInterceptor } from 'src/app/interceptor/httpconfig.interceptor';

describe('AlbumGridComponent', () => {
  let component: AlbumGridComponent;
  let fixture: ComponentFixture<AlbumGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule, TooltipModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Image block should be Available', () => {
    const fixture = TestBed.createComponent(AlbumGridComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img.img-fluid')).toBeTruthy;
  });
});
