import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FeaturesActions } from '../../app-state/features/features.actions';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.scss'],
})
export class FeatureFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    technicalName: new FormControl('', Validators.required),
  });

  constructor(
    public store: Store,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.form.patchValue(this.config.data ?? {});
  }

  ngOnInit(): void {}

  handleSave(): void {
    this.store
      .dispatch(
        Object.keys(this.config.data ?? {}).length > 0
          ? new FeaturesActions.UpdateFeature({
              ...this.config.data,
              ...this.form.value,
            })
          : new FeaturesActions.CreateFeature({
              ...this.form.value,
              enabled: true,
            })
      )
      .subscribe(() => this.ref.close());
  }
}
