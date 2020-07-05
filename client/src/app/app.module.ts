import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './shared/search-header/search-header.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CategoriesNavComponent } from './components/categories-nav/categories-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    ItemDetailComponent,
    ItemListComponent,
    CategoriesNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
