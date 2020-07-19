import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

const PROJECTS = [
  {
    title: 'items application',
    category: 'full-stack',
    image: '../../assets/img/portfolio/portfolio-1.webp',
    link: 'https://items-ui.aaronshivers.now.sh/',
  },
  {
    title: 'Desks by Design',
    category: 'design',
    image: '../../assets/img/portfolio/portfolio-2.webp',
    link: 'https://desks-by-design.netlify.com/',
  },
  {
    title: 'Honest Beauty Products',
    category: 'design',
    image: '../../assets/img/portfolio/portfolio-3.webp',
    link: 'https://aaronshivers.github.io/honest/',
  },
  {
    title: 'Four Cards',
    category: 'front-end',
    image: '../../assets/img/portfolio/portfolio-4.webp',
    link: 'https://four-cards.aaronshivers.now.sh/',
  },
  {
    title: 'Indecision',
    category: 'front-end',
    image: '../../assets/img/portfolio/portfolio-5.webp',
    link: 'https://indecision.aaronshivers.com/',
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
