import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveDetailResponse } from '../../models/move-detail.interface';
import { MoveService } from '../../services/move.service';


@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrl: './move-detail.component.css'
})
export class MoveDetailComponent implements OnInit{

  moveId: string | null = '';
  move: MoveDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private moveService: MoveService
  ) { }
  
  ngOnInit(): void {
    debugger;
    this.moveId = this.route.snapshot.paramMap.get('id');
    debugger;
    
    this.moveService.getOneMove(parseInt(this.moveId!)).subscribe((response) => {
      this.move = response;
    });
  }
}