import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  officename;
  submitted=false;
  answer=false;
  error=false;
  suggestions=[];
  constructor() { }
}
