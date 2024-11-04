import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { MediaComponent } from './media/media.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { StddevComponent } from './stddev/stddev.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
    declarations:[
        AppComponent,
        CorrelationComponent,
        LinearRegressionComponent,
        MediaComponent,
        SimpsonComponent,
        StddevComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }