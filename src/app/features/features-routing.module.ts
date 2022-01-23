import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesTableComponent } from './features-table/features-table.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesTableComponent,
  },
  {
    path: ':id',
    component: FeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
