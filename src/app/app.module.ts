import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CommComponentsComponent } from './comm-components/comm-components.component';

import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './home/home.component';

import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { RoutingFeatureModule } from './routing-feature/routing-feature.module';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserformsModule } from './forms/userforms/userforms.module';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FoodListComponent } from './dependency-injection/food-list/food-list.component';
import { FoodModule } from './dependency-injection/food/food.module';
import { ChildComponent } from './lifecycle-hooks/child/child.component';
import { StudentListComponent } from './api-integration/student-list/student-list.component';
import { HttpInterceptorService } from './api-integration/http-interceptor.service';
import { ModulesComponent } from './modules/modules.component';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { BooksModule } from './modules/book-list/books/books.module';
import { GenresModule } from './modules/genre-list/genres/genres.module';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    DatabindingComponent,
    CommComponentsComponent,
    PipesComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
    LifecycleHooksComponent,
    HomeComponent,
    ApiIntegrationComponent,
    PageNotFoundComponent,
    ReversePipe,
    FilterPipe,
    ChildComponent,
    StudentListComponent,
    ModulesComponent,
    
   
    
    
    

  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingFeatureModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UserformsModule,
    FoodModule,
    BooksModule,
    GenresModule,
    CoreModule,
    SharedModule
    
    

    
  ],
  providers: [
    provideClientHydration(),
    UserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
