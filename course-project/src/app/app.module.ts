import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-edit/shopping-list-edit.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDetailComponent,
    HeaderComponent,
    RecepiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
