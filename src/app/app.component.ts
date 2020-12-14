import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
	template: `
		<div class="wrapper">
			<div class="sidebar animated fadeInDown">
				<app-layout-sidebar></app-layout-sidebar>
			</div>
			<div class="main">
				<div class="autopagerize_page_element">
					<div class="content">
						<router-outlet></router-outlet>
					</div>
				</div>
			</div>
		</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-scully';
}
