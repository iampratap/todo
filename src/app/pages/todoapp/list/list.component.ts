import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this._rest.getTodos().subscribe(data => {
      console.log(data);
    }, err => console.log(err));
  }

}
