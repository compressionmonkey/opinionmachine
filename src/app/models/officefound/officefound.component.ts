import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-officefound',
  templateUrl: './officefound.component.html',
  styleUrls: ['./officefound.component.scss']
})
export class OfficefoundComponent implements OnInit {
  state;
  constructor(
    private stateService: StateService
  ) {
    this.state = this.stateService
   }

  ngOnInit() {
    console.log('state', this.state)
  }

}
