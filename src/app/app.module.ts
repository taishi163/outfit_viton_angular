import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { FitChoosingsComponent } from './fit-choosings/fit-choosings.component';
import { FitChoosingHeaderComponent } from './fit-choosing-header/fit-choosing-header.component';
import { QueryComponent } from './query/query.component';
import { RefTopComponent } from './ref-top/ref-top.component';
import { RefBottomComponent } from './ref-bottom/ref-bottom.component';
import { FakeGeneratedComponent } from './fake-generated/fake-generated.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeListComponent,
    FitChoosingsComponent,
    FitChoosingHeaderComponent,
    QueryComponent,
    RefTopComponent,
    RefBottomComponent,
    FakeGeneratedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,        // HTTP通信モジュールをインポート
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [AppService],  // 作成したサービスを登録 
  bootstrap: [AppComponent]
})
export class AppModule { }
