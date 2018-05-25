import { NgModule } from '@angular/core';
import { AccountActivationComponent } from './account-activation.component';
import { AccountActivationRoutingModule } from './account-activation.routing.module';
@NgModule({
    exports:[AccountActivationRoutingModule],
imports:[AccountActivationRoutingModule],
declarations:[AccountActivationComponent]
})
export class AccountActivationModule {}