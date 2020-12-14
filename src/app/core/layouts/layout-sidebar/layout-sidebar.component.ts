import { Component, OnInit } from '@angular/core';

interface Profile {
  github: string;
  email: string;
  twitter: string;
  facebook: string;
}

@Component({
  selector: 'app-layout-sidebar',
  template: `
    <div class="logo-title">
      <div class="title">
        <img src="/assets/images/avatar.png" style="width: 170px;border-radius: 50%;">
        <h3 title=""><a href="/">Tuan Anh</a></h3>
        <div class="description">
          <p class="m-0">Before you can work smart</p>
          <p class="m-0">You must work hard.</p>
        </div>
      </div>
    </div>
    <ul class="social-links">
      <li><a [href]="'https://github.com/' + profile?.github" target="_blank" rel="noopener"><i class="fa fa-github"></i></a></li>
      <li><a [href]="'mailto:' + profile?.email"><i class="fa fa-envelope"></i></a></li>
      <li>
        <a [href]="'https://twitter.com/' + profile?.twitter" target="_blank" rel="noopener">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li><a [href]="'https://facebook.com/' + profile?.facebook" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a></li>
    </ul>
    <div class="footer">
      <div class="p"> <span>© 2020 </span><i class="fa fa-star"></i><span> Angular Viet Nam Team</span></div>
      <div class="by_farbox"><span>Built with </span><a href="//scully.io/" target="_blank">Scully </a><span> & </span><a href="//angular.io/" target="_blank">Angular </a></div>
    </div>
  `,
  styles: [
  ]
})
export class LayoutSidebarComponent implements OnInit {
  profile: Profile = {
    github: 'tuananhitoct',
    email: 'tuananhit.oct@gmail.com',
    twitter: 'clementle24',
    facebook: 'tuananh.mqb',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
