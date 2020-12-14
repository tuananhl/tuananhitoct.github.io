import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: `app-home`,
  template: `
    <div class="post animated fadeInDown">
      <div class="post-title">
        <h3><a href="/2020/08/12/%E7%BE%A4%E6%99%96%E5%AE%89%E8%A3%85GitLab%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8SMTP%E5%8F%91%E9%80%81%E9%82%AE%E4%BB%B6%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/">Synology installation GitLab cannot use SMTP to send mail solutions</a></h3>
      </div>
      <div class="post-content">
        <p>GitLab, there is one step in the installation process as follows, if it is already installed, skip this step 12 Domain name Fill in the domain name to access GitLab, such as gitlab.jixian.io No domain name, fill in the IP email address, such as gitlab@jixian.io Choose to install Do not start at all, if it has been started, select Disable in the package center, open Docker and select the container ...
        </p>
      </div>
      <div class="post-footer">
        <div class="meta">
          <div class="info"><i class="fa fa-sun-o"></i><span class="date">2020-12-14</span><i class="fa fa-tag"></i><a class="tag" href="/tags/教程/" title="教程">Tutorials </a><a class="tag" href="/tags/群晖/" title="群晖">GitLab </a><span class="leancloud_visitors"></span></div>
        </div>
      </div>
    </div>
    <div class="post animated fadeInDown">
      <div class="post-title">
        <h3><a href="/2020/08/09/Centos%20Redhat%208%E5%AE%89%E8%A3%85OpenStack%20Ussuri%E6%95%99%E7%A8%8B/">Centos Redhat 8 install OpenStack Ussuri tutorial</a></h3>
      </div>
      <div class="post-content">
        <p>Two virtual machines built by the host environment VMware Workstation Pro 12controller 10.2.2.3 Centos 8.2compute 10.2.2.4 Centos 8.2 Configure related sources and environments (control nodes, compute nodes) Ali source mirror base12mv</p>
      </div>
      <div class="post-footer">
        <div class="meta">
          <div class="info"><i class="fa fa-sun-o"></i><span class="date">2020-12-09</span><i class="fa fa-tag"></i><a class="tag" href="/tags/Linux/" title="Linux">Linux </a><a class="tag" href="/tags/OpenStack/" title="OpenStack">OpenStack </a><a class="tag" href="/tags/Tutorials/" title="Tutorials">Tutorials </a><span class="leancloud_visitors"></span></div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <ul class="clearfix">
        <li class="next pagbuttons"><a class="btn" role="navigation" href="/page/2/">Xem thêm</a></li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  routes$ = this.scullyRoutesService.available$.pipe(
    map((routes) => routes.filter((route) => route.route.includes('/blog'))),
  );

  constructor(private readonly scullyRoutesService: ScullyRoutesService) {}

  ngOnInit(): void {
  }

}
