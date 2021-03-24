import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { InformModalComponent } from 'src/app/modules/common-ui/inform-modal/inform-modal.component';
import { VehicleModel } from 'src/app/repositories/models/vehicle-model.model';
import { VehicleModelService } from 'src/app/services/vehicle-model.service';
import { VehicleModelDetailComponent } from '../modals/vehicle-model-detail/vehicle-model-detail.component';

@Component({
  selector: 'app-vehicle-model-list',
  templateUrl: './vehicle-model-list.component.html',
  styleUrls: ['./vehicle-model-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleModelListComponent implements OnInit {

  constructor(private modalService: NgbModal, private vmService: VehicleModelService, private translate: TranslateService) { }

  allModels: VehicleModel[] = [];

  ngOnInit(): void {
    this.fetchAllModels();
  }

  fetchAllModels(): void {
    this.vmService.getAll().subscribe(
      response => {
        this.allModels = response;
        console.log(this.allModels);
      },
      error => { },
      () => { }
    );
  }

  onCreateNewClicked(): void {
    const modal = this.modalService.open(VehicleModelDetailComponent, { backdrop: 'static', centered: false });
  }

  onEditClicked(editedModel: VehicleModel): void {
    const modalRef = this.modalService.open(VehicleModelDetailComponent, { backdrop: 'static', centered: false });
    modalRef.componentInstance.model = { ...editedModel };
    modalRef.componentInstance.selectbrand = { ...editedModel.brand };
    modalRef.componentInstance.is_update = true;
    modalRef.componentInstance.completeEvent.subscribe(() => {
      this.fetchAllModels();
    });
  }

  onDeleteClicked(model: VehicleModel): void {

    const deleteCmd = () => this.vmService.delete(model).subscribe(
      response => { },
      error => { },
      () => {
        this.fetchAllModels();
      }
    );

    this.translate.get(`message.delete_model`, { name: model.name }).subscribe(message => {

      this.translate.get(`title.delete_model_modal`).subscribe(title => {

        const modalRef: any = this.modalService.open(InformModalComponent, { backdrop: true, centered: true });
        modalRef.componentInstance.data = {
          title: title,
          body: `<div class="text-left">${message}</div>`,
          isPrompt: true,
          emitConfirm: true
        };
        console.log(message);
        modalRef.componentInstance.emitConfirmAction.subscribe(() => {
          deleteCmd();
        });

      }, err => { });

    }, err => { });

  }

}
