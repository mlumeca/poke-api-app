import { Component, OnInit } from '@angular/core';
import { Move } from '../../models/move-list.interface';
import { MoveService } from '../../services/move.service';
import { ActivatedRoute } from '@angular/router';
import { MoveDetailResponse } from '../../models/move-detail.interface';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css'
})
export class MoveListComponent implements OnInit{
  
  moveList: Move[] = [];
  moveId: string | null = '';
  move: MoveDetailResponse | undefined;

  constructor(private moveService: MoveService, private route: ActivatedRoute, private moveService: MoveService) {}



  ngOnInit(): void {
    this.moveService.getMoveList().subscribe((resp) => {
      this.moveList = resp.results;
    });
  }
}
  
  ngOnInit(): void {
    this.moveId = this.route.snapshot.paramMap.get('id');
    
    this.moveService.getOneMove(parseInt(this.moveId!)).subscribe((response) => {
      this.move = response;
    });
  }
}