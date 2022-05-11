import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HydraViewContent} from "../../models/steamish/i-api-result";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  hydraView: HydraViewContent|undefined;

  /**
   * Ici on voit remonter au component mère, l'url sur laquelle l'utilisateur vient de cliquer
   * Donc le type entre chevrons de notre EventEmitter est de type string
   */
  @Output()
  eventEmitterUrlClicked: EventEmitter<string> = new EventEmitter<string>();

  emitUrl(url: string|undefined): void {
    console.log(url);
    // L'évènement émis est du même type que celui déclaré dans notre EventEmitter, ici string
    // donc la fonction emit de l'EventEmitter attend un paramètre de type string
    this.eventEmitterUrlClicked.emit(url);
  }

}
