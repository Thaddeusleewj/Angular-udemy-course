import { Component } from '@angular/core';

// Importing components
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './dashboard/tickets/new-ticket/new-ticket.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
    NewTicketComponent,
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
