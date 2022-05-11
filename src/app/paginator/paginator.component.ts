import {Component, Input} from '@angular/core';
import {HydraViewContent} from "../../models/steamish/i-api-result";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  hydraView: HydraViewContent|undefined;

  updateGamePage(url: string|undefined): void {

  }

}
