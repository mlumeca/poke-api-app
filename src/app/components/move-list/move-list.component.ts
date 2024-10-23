import { Component, OnInit } from '@angular/core';
import { Move } from '../../models/move-list.interface';
import { MoveService } from '../../services/move.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css'
})
export class MoveListComponent implements OnInit{
  
  moveList: Move[] = [];

  constructor(private moveService: MoveService) {}

  ngOnInit(): void {
    this.moveService.getMoveList().subscribe((resp) => {
      this.moveList = resp.results;
    });
  }
}
