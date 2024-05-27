import { Inject, Injectable } from '@angular/core';
import { TuiAlertService, TuiNotificationT } from '@taiga-ui/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  showSuccessMessage() {
    this.alerts.open('Action Completed Successfully!', { status: 'success' }).subscribe();
  }

  showMessage(message: string, status: TuiNotificationT) {
     this.alerts.open(message, { status }).subscribe();
  }
}
