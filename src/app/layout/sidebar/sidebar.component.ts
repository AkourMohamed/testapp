import { Component, Input, OnInit } from '@angular/core';
import MetisMenu from 'metismenujs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean;
  constructor() { }

  ngOnInit(): void {
    const mm = new MetisMenu('.metismenu', {});
  }

}
