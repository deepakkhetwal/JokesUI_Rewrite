/**
 * Created by deepakkhetwal on 9/27/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { JokesListModule } from './jokes-list/jokes.list.module';
if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(JokesListModule);
