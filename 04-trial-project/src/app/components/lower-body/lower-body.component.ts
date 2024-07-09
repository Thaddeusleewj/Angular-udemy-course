import { Component, inject, computed } from '@angular/core';
import { InvestmentServiceService } from '../../services/investment-service.service';

@Component({
  selector: 'app-lower-body',
  templateUrl: './lower-body.component.html',
  styleUrl: './lower-body.component.css',
})
export class LowerBodyComponent {
  // Same service instance
  private investmentService = inject(InvestmentServiceService);

  results = computed(() => this.investmentService.resultData.asReadonly());
}
