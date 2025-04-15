import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CommComponentsComponent } from './comm-components/comm-components.component';

import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { AuthService } from './auth.service';
import { StudentListComponent } from './api-integration/student-list/student-list.component';
import { ModulesComponent } from './modules/modules.component';
import { BookListComponent } from './modules/book-list/book-list.component';
import { GenreListComponent } from './modules/genre-list/genre-list.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'commComponents', component: CommComponentsComponent },
 
    {
      path: 'routing',
      loadChildren: () => import('./routing-feature/routing-feature.module').then(m => m.RoutingFeatureModule),
      canActivate:[AuthService],
    },
    {
      path: 'forms',
      loadChildren: () =>
        import('./forms/userforms/userforms.module').then((m) => m.UserformsModule),
    },
    { path: '', redirectTo: 'forms', pathMatch: 'full' },
   
  
  
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'DI', component: DependencyInjectionComponent },
  { path: 'lifecyclehooks', component: LifecycleHooksComponent },
  {
    path: 'api',
    component: ApiIntegrationComponent,
    children: [
      { path: 'students', component: StudentListComponent},
      { path: 'students/:id', component: ApiIntegrationComponent},
      
    ]
  },
  { path: '', redirectTo: 'api/students', pathMatch: 'full' },
  { path: '', redirectTo: 'modules', pathMatch: 'full' },
  { path: '', redirectTo: 'modules/books', pathMatch: 'full' },
  {
    path: 'modules',
    component: ModulesComponent,
    children: [
      {
        path: 'books',
        loadChildren: () =>
          import('./modules/book-list/books/books.module').then((m) => m.BooksModule)
      },
      {
        path: 'genres',
        loadChildren: () =>
          import('./modules/genre-list/genres/genres.module').then((m) => m.GenresModule)
      }
    ]
  },
  { path: '**', redirectTo: 'modules/books' }

 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
