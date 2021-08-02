import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.css']
})
export class AlbumHeaderComponent implements OnInit {
  @Output() sortChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // Change when Sorting
  onChange(event: any) {
    this.sortChange.emit(event.target.value)
  }

}
