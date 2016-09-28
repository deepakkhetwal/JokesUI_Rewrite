/**
 * Created by deepakkhetwal on 9/27/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { JokesListComponent } from './jokes.list.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        JokesListComponent
    ],
    bootstrap: [ JokesListComponent ]
})
export class JokesListModule { }
