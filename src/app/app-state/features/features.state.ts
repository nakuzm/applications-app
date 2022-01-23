import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ApplicationFeature } from '../../types/features.types';
import { FeaturesActions } from './features.actions';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { insertItem, updateItem } from '@ngxs/store/operators';
import { MessageService } from 'primeng/api';

@State<ApplicationFeature[]>({
  name: 'features',
  defaults: [],
})
@Injectable()
export class FeaturesState {
  constructor(private messageService: MessageService) {}

  @Selector()
  static getFeatures(state: ApplicationFeature[]) {
    return (state ?? []).filter(({ enabled }) => enabled);
  }

  @Action(FeaturesActions.CreateFeature)
  createFeature(
    ctx: StateContext<ApplicationFeature[]>,
    { payload }: FeaturesActions.CreateFeature
  ) {
    const state = ctx.getState();

    return of(null).pipe(
      tap(() =>
        this.messageService.add({
          summary: `Feature '${payload.technicalName}' added successfully`,
          severity: 'success',
        })
      ),
      tap(() => {
        ctx.setState(
          insertItem<ApplicationFeature>({ ...payload, id: state.length })
        );
      })
    );
  }

  @Action(FeaturesActions.ArchiveFeature)
  archiveFeature(
    ctx: StateContext<ApplicationFeature[]>,
    { payload }: FeaturesActions.ArchiveFeature
  ) {
    return of(null).pipe(
      tap(() =>
        this.messageService.add({
          summary: `Feature '${payload.technicalName}' archived successfully`,
          severity: 'success',
        })
      ),
      tap(() => {
        ctx.setState(
          updateItem<ApplicationFeature>((f) => f?.id === payload.id, {
            ...payload,
            enabled: false,
          })
        );
      })
    );
  }

  @Action(FeaturesActions.UpdateFeature)
  updateFeature(
    ctx: StateContext<ApplicationFeature[]>,
    { payload }: FeaturesActions.UpdateFeature
  ) {
    return of(null).pipe(
      tap(() =>
        this.messageService.add({
          summary: `Feature '${payload.technicalName}' updated successfully`,
          severity: 'success',
        })
      ),
      tap(() => {
        ctx.setState(
          updateItem<ApplicationFeature>((f) => f?.id === payload.id, payload)
        );
      })
    );
  }
}
