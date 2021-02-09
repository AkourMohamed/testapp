import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() SideBarStatus = new EventEmitter<boolean>();
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
    this.checkScren();
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.SideBarStatus.emit(this.isOpen);
    this.checkScren();
  }

  checkScren(): void {

    if (window.innerWidth <= 500) {
      // const brand = document.querySelector('#navbar-brand');
      // const toggler = document.querySelector('#navbar-toggler');
      if (this.isOpen) {
        // brand.classList.add('hide');
        // toggler.classList.add('hide');
      } else {
        // brand.classList.remove('hide');
        // toggler.classList.remove('hide');
      }
    }
  }

}
