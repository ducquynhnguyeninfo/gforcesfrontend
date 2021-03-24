import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigator-bar',
  templateUrl: './navigator-bar.component.html',
  styleUrls: ['./navigator-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorBarComponent implements OnInit {

  constructor(translate: TranslateService) { }

  ngOnInit(): void {
  }

}
