import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegistrationComponent } from './registration.component';

@Injectable()
export class RegistrationGuardService implements CanDeactivate<RegistrationComponent> {

  constructor() { }

  canDeactivate(component: RegistrationComponent): boolean {
    if (component.courseForm.dirty) {
      return confirm('Are you sure you don’t want to save the data?');
    }
    return true;
  }
}