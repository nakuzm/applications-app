import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApplicationFeature } from '../../types/features.types';
import { Store } from '@ngxs/store';
import { FeaturesState } from '../../app-state/features/features.state';
import { DialogService } from 'primeng/dynamicdialog';
import { FeatureFormComponent } from '../feature-form/feature-form.component';
import { BtnCellRendererComponent } from '../../table/btn-cell-renderer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FeaturesActions } from '../../app-state/features/features.actions';

@Component({
  selector: 'app-features-table',
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTableComponent implements OnInit {
  columnDefs: ColDef[] = [
    {
      field: 'technicalName',
      cellRendererParams: {
        clicked: (field: any, action: string) => {
          console.log(field);
        },
      },
    },
    {
      cellRendererFramework: BtnCellRendererComponent,
      cellRendererParams: {
        clicked: (field: any, action: string) => {
          if (action === 'edit') {
            this.dialogService.open(FeatureFormComponent, {
              header: 'Edit Feature',
              width: '600px',
              data: field,
            });
            return;
          }
          if (action === 'archive') {
            this.store.dispatch(new FeaturesActions.ArchiveFeature(field));
          }
        },
      },
      minWidth: 150,
    },
  ];
  rowData: Observable<ApplicationFeature[]>;
  gridOptions = {
    onRowClicked: (data: any) => {
      this.router.navigate([data.data.technicalName], {
        relativeTo: this.route,
      });
    },
  };

  constructor(
    private store: Store,
    public dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.rowData = this.store.select(FeaturesState.getFeatures);
  }

  ngOnInit(): void {}

  handleAddClick(): void {
    this.dialogService.open(FeatureFormComponent, {
      header: 'Add Feature',
      width: '600px',
    });
  }
}
