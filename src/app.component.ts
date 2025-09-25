import { Component, ChangeDetectionStrategy, AfterViewChecked, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

declare var lucide: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent implements AfterViewChecked, OnInit {
  private authService = inject(AuthService);
  title = 'language-platform';

  ngOnInit() {
    this.authService.autoLogin();
  }

  ngAfterViewChecked() {
    // Re-render lucide icons after view updates
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}
