import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/// My services
import { GeoService } from './service/geo/geo.service';

/// My components
import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { MyGmapComponent } from './component/my-gmap/my-gmap.component';
import { CommunityComponent } from './component/community/community.component';
import { StaffMembersComponent } from './component/staff-members/staff-members.component';
import { EventsComponent } from './component/events/events.component';
import { EventComponent } from './component/event/event.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { PayerListComponent } from './component/payer-list/payer-list.component';

const appRoutes: Routes = [
  { path: 'staff-members', component: StaffMembersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event', component: EventComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'community', component: CommunityComponent },
  {
    path: 'prayer-list',
    component: PayerListComponent,
    data: { title: 'Prayer List' }
  },
  { path: '',
    redirectTo: '/staff-members',
    pathMatch: 'full'
  },
  { path: '**', component: StaffMembersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    MyGmapComponent,
    CommunityComponent,
    StaffMembersComponent,
    EventsComponent,
    TasksComponent,
    PayerListComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
