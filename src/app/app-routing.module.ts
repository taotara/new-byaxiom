import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SoftwareDevelopmentComponent } from './pages/services/software-development/software-development.component';
import { WebApplicationComponent } from './pages/services/web-application/web-application.component';
import { TrainingComponent } from './pages/services/training/training.component';
import { ConsultancyComponent } from './pages/services/consultancy/consultancy.component';
import { WebsiteDevAndHostingComponent } from './pages/services/website-dev-and-hosting/website-dev-and-hosting.component';
import { TheCompanyComponent } from './pages/about/the-company/the-company.component';
import { OurPortfolioComponent } from './pages/about/our-portfolio/our-portfolio.component';
import { StaffMangerComponent } from './pages/staff-manger/staff-manger.component';
import { FarmManagerComponent } from './pages/farm-manager/farm-manager.component';
import { PoolSolComponent } from './pages/pool-sol/pool-sol.component';
import { SchoolManagerComponent } from './pages/school-manager/school-manager.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services',
  },
  {
    path: 'services/software-development',
    component: SoftwareDevelopmentComponent,
    title: 'Software Development',
  },
  {
    path: 'services/web-application',
    component: WebApplicationComponent,
    title: 'Web Application',
  },
  {
    path: 'services/training',
    component: TrainingComponent,
    title: 'Training',
  },
  {
    path: 'services/consultancy',
    component: ConsultancyComponent,
    title: 'Consultancy',
  },
  {
    path: 'services/web-dev-hosting',
    component: WebsiteDevAndHostingComponent,
    title: 'Web Dev and Hosting',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'products/staff-manager',
    component: StaffMangerComponent,
    title: 'Staff Manager',
  },
  {
    path: 'products/farm-manager',
    component: FarmManagerComponent,
    title: 'Farm Manager',
  },
  {
    path: 'products/pool-sol',
    component: PoolSolComponent,
    title: 'Poolsol',
  },
  {
    path: 'products/school-manager',
    component: SchoolManagerComponent,
    title: 'School Manager',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'about/the-company',
    component: TheCompanyComponent,
    title: 'The Company',
  },
  {
    path: 'about/portfolio',
    component: OurPortfolioComponent,
    title: 'Portfolio',
  },
  {
    path: 'contact',
    component: ContactsComponent,
    title: 'Contact',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
