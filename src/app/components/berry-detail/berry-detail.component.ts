import { Component } from '@angular/core';
import { BerryDetailResponse } from '../../models/berry-detail-interface';
import { ActivatedRoute } from '@angular/router';
import { BerryService } from '../../services/berry.service';

@Component({
  selector: 'app-berry-detail',
  templateUrl: './berry-detail.component.html',
  styleUrl: './berry-detail.component.css'
})
export class BerryDetailComponent {
  berryId: string | null = '';
  berry: BerryDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private berryService: BerryService
  ) { }
  
  ngOnInit(): void {
    this.berryId = this.route.snapshot.paramMap.get('id');
    
    this.berryService.getOneBerry(parseInt(this.berryId!)).subscribe((response) => {
      this.berry = response;
    });
  }
}
