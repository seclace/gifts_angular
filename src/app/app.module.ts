import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MainComponent} from './components/main/main.component';
import {MeComponent} from './components/me/me.component';
import {FeedComponent} from './components/feed/feed.component';
import {AnswersComponent} from './components/answers/answers.component';
import {FriendsComponent} from './components/friends/friends.component';
import {SettingsComponent} from './components/settings/settings.component';
import {Route, RouterModule} from "@angular/router";
import {FeedService} from "./services/feed.service";

const AppRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full'
    },
    {path: 'me', component: MeComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'answers', component: AnswersComponent},
    {path: 'friends', component: FriendsComponent},
    {path: 'settings', component: SettingsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MainComponent,
        MeComponent,
        FeedComponent,
        AnswersComponent,
        FriendsComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
    ],
    providers: [FeedService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
