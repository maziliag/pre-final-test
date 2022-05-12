import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../model/api';
import { FetchJsonService } from 'src/app/services/fetch-json.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  title: string = 'list-data';

  @Input() data = [''];
  @Input() myArray: Quote[] | undefined;
  users: any;

  displayList: boolean = true;
  displayFact: boolean = false;

  constructor(private fetchJsonService: FetchJsonService) {}

  ngOnInit(): void {
    /*
    this.fetchJsonService.getJson().subscribe((response) => {
      this.myArray = response;
      this.users = response;
      console.log(response);
    });*/
    console.log('loaded');
  }

  onClick($event: Event) {
    console.log((<HTMLDivElement>$event.target).innerText);
  }

  onRemove() {
    this.displayList = false;
  }

  getFact() {
    this.fetchJsonService.getJson().subscribe((response) => {
      this.myArray = response;
      this.users = response;
      this.displayFact = true;
      console.log(response);
    });
  }
}
