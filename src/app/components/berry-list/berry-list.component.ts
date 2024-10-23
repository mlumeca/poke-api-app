import { Component } from '@angular/core';
import { Berry } from '../../models/berry-list.interface';
import { BerryService } from '../../services/berry.service';

@Component({
  selector: 'app-berry-list',
  templateUrl: './berry-list.component.html',
  styleUrl: './berry-list.component.css'
})
export class BerryListComponent {

  berryList: Berry[] = [];

  constructor(private berryServices: BerryService) { }

  ngOnInit(): void {
    this.berryServices.getBeeryList().subscribe((resp) => {
      this.berryList = resp.results;
    });
  }

}
