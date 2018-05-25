import { NgModule } from '@angular/core';
import { WhatsnewComponent } from './whatsnew.component';
import { whatsNewRoutingModule } from './whatsnew.routing.module';
@NgModule({
    exports:[whatsNewRoutingModule],
imports:[whatsNewRoutingModule],
declarations:[WhatsnewComponent]
})
export class WhatsNewModule {}