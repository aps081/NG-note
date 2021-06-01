import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  // @Input() list;

  lists = [];



  constructor() { }

  ngOnInit(): void {
  }

  add(newItem: string) {

    if (newItem) {
      this.lists.push(newItem);

    }
  }

}
