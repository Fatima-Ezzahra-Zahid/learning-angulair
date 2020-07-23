import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-apperiel',
  templateUrl: './apperiel.component.html',
  styleUrls: ['./apperiel.component.scss']
})
export class ApperielComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatus: string;


  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus;
  }


}


