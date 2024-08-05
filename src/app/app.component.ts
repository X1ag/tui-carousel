import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiAlertModule, TUI_SANITIZER, TuiDialogModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CarouselModule } from './carousel/carousel.module'
import { CarouselComponent } from './carousel/carousel.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TuiRootModule, CarouselModule, TuiDialogModule, TuiAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})

export class AppComponent {
  title = 'blog';
}
