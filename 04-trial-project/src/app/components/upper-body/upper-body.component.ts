import { Component, signal } from '@angular/core';
import { InvestmentInput } from '../../models/investment-input.model';

import { InvestmentServiceService } from '../../services/investment-service.service';

@Component({
  selector: 'app-upper-body',
  templateUrl: './upper-body.component.html',
  styleUrl: './upper-body.component.css',
})
export class UpperBodyComponent {
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  expectedDuration = signal(10);

  constructor(private investmentService: InvestmentServiceService) {}

  // Handle form submission
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment(),
      duration: this.expectedDuration(),
      expectedReturn: this.enteredExpectedReturn(),
      annualInvestment: this.enteredAnnualInvestment(),
    });

    // Reset the form
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.expectedDuration.set(10);
  }
}
