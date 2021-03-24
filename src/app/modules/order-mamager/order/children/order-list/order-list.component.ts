import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { OrderDetailComponent } from '../modals/order-detail/order-detail.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {

  constructor(translate: TranslateService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreateNewClicked(): void {
    const modal = this.modalService.open(OrderDetailComponent, { backdrop: 'static', centered: false });
  }
}
