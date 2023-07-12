import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { WecomeSectionComponent } from './components/wecome-section/wecome-section.component';
import { ServicesSetionComponent } from './components/services-setion/services-setion.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ClienteleSectionComponent } from './components/clientele-section/clientele-section.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { SoftwareDevelopmentComponent } from './pages/services/software-development/software-development.component';
import { WebApplicationComponent } from './pages/services/web-application/web-application.component';
import { TrainingComponent } from './pages/services/training/training.component';
import { ConsultancyComponent } from './pages/services/consultancy/consultancy.component';
import { WebsiteDevAndHostingComponent } from './pages/services/website-dev-and-hosting/website-dev-and-hosting.component';
import { TheCompanyComponent } from './pages/about/the-company/the-company.component';
import { OurPortfolioComponent } from './pages/about/our-portfolio/our-portfolio.component';
import { ServicesMenuComponent } from './components/services-menu/services-menu.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { StaffMangerComponent } from './pages/staff-manger/staff-manger.component';
import { FarmManagerComponent } from './pages/farm-manager/farm-manager.component';
import { PoolSolComponent } from './pages/pool-sol/pool-sol.component';
import { SchoolManagerComponent } from './pages/school-manager/school-manager.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    AboutComponent,
    ContactsComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    WecomeSectionComponent,
    ServicesSetionComponent,
    ContactSectionComponent,
    ProductSectionComponent,
    ClienteleSectionComponent,
    PageTitleComponent,
    SoftwareDevelopmentComponent,
    WebApplicationComponent,
    TrainingComponent,
    ConsultancyComponent,
    WebsiteDevAndHostingComponent,
    TheCompanyComponent,
    OurPortfolioComponent,
    ServicesMenuComponent,
    ContactBannerComponent,
    ProductMenuComponent,
    StaffMangerComponent,
    FarmManagerComponent,
    PoolSolComponent,
    SchoolManagerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
