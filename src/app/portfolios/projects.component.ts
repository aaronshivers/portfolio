import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

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
  {
    title: 'Four Cards',
    category: 'front-end',
    image: '../../assets/img/portfolio/portfolio-4.webp',
    link: 'https://four-cards.aaronshivers.now.sh/',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.scss' ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
