import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from '@app/components/app/app.component';
import { HomeComponent } from '@app/modules/home/home.component';
import { HttpService } from '@app/services/http.service';
import { AuthGuard } from '@app/services/auth.guard';
import { NavMenuComponent } from '@app/components/navmenu/navmenu.component';
import { CounterComponent } from '@app/modules/about/about.component';
import { FetchDataComponent } from '@app/modules/dashboard/dashboard.component';
import { CallbackComponent } from "@app/components/Callback/callback.component";
import { TokenInterceptor } from "@app/services/token.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import {DashletComponent} from "@app/components/dashlet/dashlet.component";
import {RegistrationComponent} from "@app/modules/registration/registration.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    declarations: [

        AppComponent,
        CallbackComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        DashletComponent,
        RegistrationComponent
    ],
    imports: [
        HttpClientModule,
        OAuthModule.forRoot(),
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        RouterModule.forRoot([
            { path: '', component: CallbackComponent, pathMatch: 'full' },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'about', component: CounterComponent, canActivate: [AuthGuard] },
            { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
            { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard] },
            { path: '**', redirectTo: '' }
        ])
    ],
    providers: [
        HttpService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ]
})
export class AppModuleShared {
}

