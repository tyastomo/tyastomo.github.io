import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ang';
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  Experiences = [
    {
      'id': 1,
      'office': 'PT Hasil Sukses Indonesia',
      'position': 'Developer',
      'year': '2022 - Now'
    },
    {
      'id': 2,
      'office': 'PT Prima Mandiri Komunikasi',
      'position': 'Staff Developer',
      'year': '2020 - 2022'
    },
    {
      'id': 3,
      'office': 'PT Solusi Digital Industri',
      'position': 'Frontend Developer',
      'year': '2020'
    },
    {
      'id': 4,
      'office': 'PT Sisfomedika',
      'position': 'Web Designer',
      'year': '2017 - 2019'
    },
  ];
  Skills = [
    {
      'id': 1,
      'name': 'Backend',
      'sets': [
        {
          'id': 1,
          'name': 'PHP'
        },
        {
          'id': 2,
          'name': 'Laravel Framework'
        },
        {
          'id': 3,
          'name': 'MySQL'
        },
        {
          'id': 4,
          'name': 'PostgreSQL'
        },
      ], 
    },
    {
      'id': 2,
      'name': 'Frontend',
      'sets': [
        {
          'id': 1,
          'name': 'Bootstrap CSS'
        },
        {
          'id': 2,
          'name': 'VueJS'
        },
        {
          'id': 3,
          'name': 'NuxtJS'
        },
        {
          'id': 4,
          'name': 'Angular'
        },
        {
          'id': 5,
          'name': 'JQuery'
        },
        {
          'id': 6,
          'name': 'TailwindCSS'
        },
        {
          'id': 7,
          'name': 'CSS 3'
        },
      ], 
    },
    {
      'id': 3,
      'name': 'Others',
      'sets': [
        {
          'id': 1,
          'name': 'Git'
        },
        {
          'id': 2,
          'name': 'Linux Server'
        },
        {
          'id': 3,
          'name': 'Wordpress'
        },
        {
          'id': 4,
          'name': 'Figma'
        },
        {
          'id': 5,
          'name': 'Illustrator'
        },
        {
          'id': 6,
          'name': 'Photoshop'
        },
      ], 
    }
  ];
}
