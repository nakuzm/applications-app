import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesTableModule } from './features-table/features-table.module';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FeaturesTableModule,
    FeatureModule,
  ],
})
export class FeaturesModule {}
