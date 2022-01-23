import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FeaturesState } from './features/features.state';
import { environment } from '../../environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([FeaturesState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot(),
  ],
})
export class AppStateModule {}
