import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-chaticon',
  templateUrl: './chaticon.component.html',
  styleUrls: ['./chaticon.component.scss']
})
export class ChaticonComponent implements OnInit {
  state;
  database = [
    {id:1, officename: 'Sangay Dorji Tshongkhang', location: 'Thimphu'},
    {id:2, officename: 'KMT Mart', location: 'Paro'},
    {id:3, officename: 'Penden Cement', location: 'Samdrup Jongkhar'},
];
  constructor(
    private stateService: StateService
  ) { 
    this.state = this.stateService
  }

  ngOnInit() {
  }

  clickSuggestion(selected){
    this.state.officename = selected
    this.state.suggestions = []
  }
  onInput(value: string){
    console.log('here', value, this.state.officename)
    if(value.length === 0){
      this.state.suggestions = [];
    }
    else{
      const regex = new RegExp(`^${value}`, 'i');
      let dbArr = [];
      this.database.map(value => {
        dbArr.push(value.officename)
      })
      const suggestions = dbArr.sort().filter(v => regex.test(v));
      this.state.suggestions = suggestions
    }
  }

  // onChange(e){
  //   // const value = e.target.value
  // }

  onSubmit(){
  if(!this.state.officename){
    this.state.error = true;
    this.state.answer = false;
    this.state.submitted=false;
  }
  else{
    this.state.submitted=true;
    this.state.error = false;
    this.database.map((value) => {
      if(value.officename == this.state.officename){
        this.state.answer = true;
      }
    })
    console.log('hay', this.state.answer)
  }
  }
}
