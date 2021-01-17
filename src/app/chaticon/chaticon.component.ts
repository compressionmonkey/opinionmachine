import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaticon',
  templateUrl: './chaticon.component.html',
  styleUrls: ['./chaticon.component.scss']
})
export class ChaticonComponent implements OnInit {
  officename;
  submitted=false;
  answer=false;
  error=false;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    const database = [
      {id:1, officename: 'Sangay Dorji Tshongkhang', location: 'Thimphu'},
      {id:2, officename: 'KMT Mart', location: 'Paro'},
      {id:3, officename: 'Penden Cement', location: 'Samdrup Jongkhar'},
  ];
  if(!this.officename){
    this.error = true;
    this.answer = false;
    this.submitted=false;
  }
  else{
    let answer = false;
    this.submitted=true;
    this.error = false;
    database.map((value) => {
      if(value.officename == this.officename){
        this.answer = true;
      }
    })
    console.log('hay', this.answer)
  }
  }
}
