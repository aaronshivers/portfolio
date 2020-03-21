import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogFeaturedComponent } from './blog-featured/blog-featured.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    PricingComponent,
    CallToActionComponent,
    TestimonialsComponent,
    BlogFeaturedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
