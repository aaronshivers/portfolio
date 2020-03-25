import {Component, OnInit, Output} from '@angular/core';
import {Project} from '../project';

const PROJECTS = [
  {
    title: 'items application',
    category: 'full-stack',
    image: '../../assets/img/portfolio/portfolio-1.webp',
    link: 'single-portfolio.html',
  },
  {
    title: 'Desks by Design',
    category: 'design',
    image: '../../assets/img/portfolio/portfolio-2.webp',
    link: 'single-portfolio.html',
  },
  {
    title: 'Honest Beauty Products',
    category: 'design',
    image: '../../assets/img/portfolio/portfolio-3.webp',
    link: 'single-portfolio.html',
  },
];

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
