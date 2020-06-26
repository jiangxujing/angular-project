import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
//引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';
//引入http模块
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http'
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { TransitionComponent } from './components/transition/transition.component'

//引入并且配置服务
import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';
import { HttpServiceService } from './services/http-service.service';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [//组件
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodoListComponent,
    ViewchildComponent,
    TransitionComponent
  ],
  imports: [//模块
    BrowserModule,
	  FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,//jsonp方法需要额外引入这个模块
   // AppRoutingModule
  ],
  providers: [StorageService,RequestService,HttpServiceService],//服务
  bootstrap: [AppComponent]
})
export class AppModule { }
