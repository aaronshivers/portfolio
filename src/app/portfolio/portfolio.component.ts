import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [ './portfolio.component.scss' ],
})
export class PortfolioComponent implements OnInit {
  @Input() project: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

}
