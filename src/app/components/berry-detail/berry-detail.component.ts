import { Component, OnInit } from '@angular/core';
import { BerryDetailResponse } from '../../models/berry-detail-response.interface';
import { ActivatedRoute } from '@angular/router';
import { BerryService } from '../../services/berry.service';

@Component({
  selector: 'app-berry-detail',
  templateUrl: './berry-detail.component.html',
  styleUrl: './berry-detail.component.css'
})
export class BerryDetailComponent implements OnInit {

  berryId: string | null = '';
  berry: BerryDetailResponse | undefined;

  constructor(
    private router: ActivatedRoute,
    private berryService: BerryService
  ) { }

  ngOnInit(): void {
    this.berryId = this.router.snapshot.paramMap.get('id');

    this.berryService.getOneBerry(parseInt(this.berryId!)).subscribe(response => {
      this.berry = response;
    })
  }

}
