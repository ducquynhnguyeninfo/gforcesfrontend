import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/repositories/models/brand.model';
import { BrandVO } from 'src/app/repositories/vo/brand-vo.model';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandDetailComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private location: Location,
              public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private brandService: BrandService
  ) { }

  public brandDetailForm: FormGroup = this.formBuilder.group({
    brandname: new FormControl('',
      Validators.compose([Validators.required])),
    description: new FormControl('')
  });

  model: BrandVO = {
    id: '',
    name: '',
    description: '',
  };

  // tslint:disable-next-line: variable-name
  is_update = false;

  @Output() dataChangedEvent = new EventEmitter();


  ngOnInit(): void { }

  // tslint:disable-next-line: typedef
  get brandnameFC() { return this.brandDetailForm.get('brandname'); }

  onCancelClicked(): void {
    this.location.back();
  }

  onAddButtonClicked(submitBtn: HTMLButtonElement): void {
    submitBtn.disabled = true;
    if (this.brandDetailForm.valid) {
      if (this.is_update) {
        this.brandService.update(this.model).subscribe(response => {
          this.activeModal.close();
          this.dataChangedEvent.emit();
        },
          error => { },
          () => {
            submitBtn.disabled = false;
          });
      } else {
        this.brandService.create(this.model).subscribe(response => {
          this.activeModal.close();
          this.dataChangedEvent.emit();
        },
          error => { },
          () => {
            submitBtn.disabled = false;
          });

      }
    }
  }

}
