import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing pipes
import { CurrencyPipe } from '@angular/common';

// Importing libraries
import { FormsModule } from '@angular/forms';

// Importing components
import { UpperBodyComponent } from './upper-body/upper-body.component';
import { LowerBodyComponent } from './lower-body/lower-body.component';

@NgModule({
  declarations: [UpperBodyComponent, LowerBodyComponent],
  imports: [CommonModule, FormsModule, CurrencyPipe],
  exports: [UpperBodyComponent, LowerBodyComponent],
})
export class BodyModule {}
