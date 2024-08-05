import { NgModule } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule } from '@taiga-ui/kit'
import { CommonModule } from '@angular/common'
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'
import { TUI_SANITIZER, TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core'

@NgModule({
	imports: [CommonModule, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule],
	exports: [CarouselComponent],
	declarations: [CarouselComponent],
	providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class CarouselModule { }
