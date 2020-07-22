import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apperiel',
  templateUrl: './apperiel.component.html',
  styleUrls: ['./apperiel.component.scss']
})
export class ApperielComponent implements OnInit {

  appareilName: string = 'Machine à laver';
  appareilStatus: string = 'éteint';


  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus;
  }


}


