import { Component, OnInit } from '@angular/core';
import { BrandDetailComponent } from '../modals/brand-detail/brand-detail.component';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/repositories/models/brand.model';
import { InformModalComponent } from 'src/app/modules/common-ui/inform-modal/inform-modal.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [];

  constructor(
    private modalService: NgbModal,
    private translate: TranslateService,
    private brandService: BrandService
  ) { }

  ngOnInit(): void {
    this.fetchBrands();
  }

  fetchBrands(): void {
    this.brandService.getAllBrands().subscribe(
      value => {
        this.brands = value;
      },
      error => { },
      () => { }
    );
  }

  onCreateNewClicked(): void {
    const modalRef = this.modalService.open(BrandDetailComponent, { backdrop: 'static', centered: false });
    modalRef.componentInstance.is_update = false;
    modalRef.componentInstance.dataChangedEvent.subscribe(() => {
      this.fetchBrands();
    });
  }

  onEditClicked(brand: Brand): void {
    const modalRef = this.modalService.open(BrandDetailComponent, { backdrop: 'static', centered: false });
    modalRef.componentInstance.model = { ...brand };
    modalRef.componentInstance.is_update = true;
    modalRef.componentInstance.dataChangedEvent.subscribe(() => {
      this.fetchBrands();
    });
  }

  onDeleteClicked(brand: Brand): void {

    const deleteBrand = () => this.brandService.delete(brand).subscribe(
      response => { },
      error => { },
      () => {
        this.fetchBrands();
      }
    );

    this.translate.get(`message.delete_brand`, {name: brand.name}).subscribe(message => {

      this.translate.get(`title.delete_brand_modal`).subscribe(title => {
        // this.showInformModal(title = title, deleteBrand);

        const modalRef: any = this.modalService.open(InformModalComponent, { backdrop: true, centered: true });
        modalRef.componentInstance.data = {
          title: title,
          body: `<div class="text-left">${message}</div>`,
          isPrompt: true,
          emitConfirm: true
        };
        console.log(message);
        modalRef.componentInstance.emitConfirmAction.subscribe(() => {
          deleteBrand();
        });

      }, err => { });

    }, err => { });

  }

}
