import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-inform-modal',
  templateUrl: 'inform-modal.component.html',
  styleUrls: ['./inform-modal.component.scss']
})
export class InformModalComponent implements OnInit, OnDestroy {

  @Input() data: any;

  @Output() emitConfirmAction = new EventEmitter(true);
  @Output() emitCrossClickedAction = new EventEmitter(true);

  constructor(public activeModal: NgbActiveModal, public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.data.doOnDestroyAsCross) {
      this.emitCrossClickedAction.next(true);
    }
  }

  closeModal(): void {
    if (this.data.emitConfirm) {
      this.emitConfirmAction.next(true);
    }
    this.activeModal.close(this.data);
  }

  crossClicked(): void {
    if (this.data.emitCrossClicked) {
      this.emitCrossClickedAction.next(true);
    }
    this.activeModal.dismiss('Cross click');
  }

  cancelClicked(): void {
    this.activeModal.dismiss();
  }
}
