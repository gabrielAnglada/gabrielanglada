import { OnInit, Component, Input } from '@angular/core';
import { ClientCardModel } from '../../models/client-card.model';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'ons-page[cards]',
  templateUrl: 'cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
          trigger('desplegado', [
                            state('default', style({ transform: 'rotate(0)' })),
                            state('rotated', style({ transform: 'rotate(-180deg)' })),
                            transition('rotated => default', animate('400ms ease-out')),
                            transition('default => rotated', animate('400ms ease-in'))
                                ]),
          trigger('contentDeploy', [
                            state('default', style({height: '0'})),
                            state('expanded', style({height: '*'})),
                            transition('expanded => default', animate('600ms ease')),
                            transition('default => expanded', animate('600ms ease'))
                                  ])
              ]
})
export class CardsPageComponent implements OnInit {
  @Input() private currentCard: ClientCardModel;

  private cards: Array<ClientCardModel>;
  private indexCard = 0;

  //for animation trigger
  private state = 'default';
  private content = 'default';

//default value
  private price = 37.45;

  constructor() {}

  ngOnInit() {
    this.cards = [
      new ClientCardModel("1243 5432 6532 9357", "Pau Roger Garcia", 1234, 13434, 14324, 342341, "assets/bml-visa-debito-1.png"),
      new ClientCardModel("1243 7245 2364 3245", "Marc Mikel Garcia", 75671, 4321, 15435, 2343241, "assets/bml-visa-debito-1.png"),
      new ClientCardModel("1243 5451 4773 2435", "Roger Ferran Garcia", 5451, 1565, 65641, 123432, "assets/bml-visa-debito-1.png"),
      new ClientCardModel("1243 3253 4654 2647", "Mikel Carles Garcia", 23431, 5461, 345341, 234321, "assets/bml-visa-debito-1.png"),
      new ClientCardModel("1243 1343 3455 2145", "Ariel Alex Garcia", 1756756, 65461, 15345, 22341, "assets/bml-visa-debito-1.png"),
      new ClientCardModel("1243 1234 7764 4324", "Pepe Machinegun Garcia", 1345345, 12323, 23421, 234431, "assets/bml-visa-debito-1.png"),
    ];
    this.currentCard = this.cards[0];
  }

//swipe events for the carousel
  swipeLeft() { //preguntar como hacer el ternario
    if(this.indexCard >= (this.cards.length - 1)) {
      this.indexCard = this.cards.length -1;
    } else {
      this.indexCard++;
    }
    this.currentCard = this.cards[this.indexCard];
  }
  swipeRight() {
    if(this.indexCard <= 0) {
      this.indexCard = 0;
    } else {
      this.indexCard--;
    }
    this.currentCard = this.cards[this.indexCard];
  }

  //animation state changer method
  desplegar() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
        this.content = (this.content === 'default' ? 'expanded' : 'default');
    }
}
