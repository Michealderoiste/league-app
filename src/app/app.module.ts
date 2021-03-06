import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LeagueComponent} from './league/league.component';
import {TeamsComponent} from './league/teams/teams.component';
import {PlayersComponent} from './league/teams/players/players.component';
import {TablesComponent} from './league/tables/tables.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations: [
        AppComponent,
        LeagueComponent,
        TeamsComponent,
        PlayersComponent,
        TablesComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
