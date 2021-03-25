import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NgbActiveModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/repositories/models/brand.model';
import { VehicleModel } from 'src/app/repositories/models/vehicle-model.model';
import { VehicleModelService } from 'src/app/services/vehicle-model.service';

@Component({
  selector: 'app-vehicle-model-detail',
  templateUrl: './vehicle-model-detail.component.html',
  styleUrls: ['./vehicle-model-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VehicleModelDetailComponent implements OnInit {

  constructor(
    private location: Location, public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder, private brandService: BrandService,
    private vehicleModelService: VehicleModelService
  ) { }

  allBrands: Brand[] = [];
  @Output() completeEvent = new EventEmitter();

  public mainForm: FormGroup = this.formBuilder.group({
    brand: new FormControl('',
      Validators.compose([Validators.required])),
    name: new FormControl('',
      Validators.compose([Validators.required])),
    price: new FormControl('',
      Validators.compose([Validators.required])),
    description: new FormControl('')
  });

  is_update = false;


  selectbrand: Brand = {};
  selectbrandId = '';

  model: VehicleModel = {
    name: '',
    brand: this.selectbrand,
    price: '',
    description: ''
  };

  ngOnInit(): void {
    // fetch all brands
    this.fetchBrands();

  }

  fetchBrands(): void {
    this.brandService.getAllBrands().subscribe(
      value => {
        this.allBrands = value;
        this.model.brand = this.selectbrand;
        this.mainForm.patchValue(this.model);
        console.log(this.selectbrand);
      },
      error => { },
      () => { }
    );
  }

  onCancelClicked(): void {
    this.location.back();
  }

  setBrand(event: any): void {
    const selectedVal = event.target.value;

    let formVal = this.mainForm.value;
    console.log((formVal));
    console.log((selectedVal));
    console.log(this.selectbrand);
  }

  compareWith(object1: any, object2: any) {
    console.log(object1);
    console.log(object2);
    return object2.id === object1.id;
  }

  onSubmitButtonClicked(submitBtn: HTMLButtonElement): void {
    submitBtn.disabled = true;
    if (this.mainForm.valid) {
      if (this.is_update) {
        const newData = this.mainForm.value;
        newData.id = this.model.id;
        newData.brand = this.selectbrand;

        // tslint:disable-next-line: no-non-null-assertion
        this.vehicleModelService.update(newData!).subscribe(response => {
          this.activeModal.close();
          this.completeEvent.emit();
        },
          error => {
            submitBtn.disabled = false;
          },
          () => {
            submitBtn.disabled = false;
          });
      } else {
        const newData = this.mainForm.value;
        newData.brand = this.selectbrand;
        // tslint:disable-next-line: no-non-null-assertion
        this.vehicleModelService.create(newData).subscribe(response => {
          this.activeModal.close();
          this.completeEvent.emit();
        },
          error => {
            submitBtn.disabled = false;
          },
          () => {
            submitBtn.disabled = false;
          });

      }
    }
  }
  clickedOption(br: any): void {
    console.log(br);
  }
}
