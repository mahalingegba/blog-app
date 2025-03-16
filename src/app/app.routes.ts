import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { JavascriptBlogsComponent } from './components/javascript-blogs/javascript-blogs.component';
import { AngularBlogsComponent } from './components/angular-blogs/angular-blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', redirectTo:'/javascript',pathMatch:'full'},
    {path: 'blogs', component: BlogsComponent},
    {path: 'preparation', component: PreparationComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'javascript', component: JavascriptBlogsComponent},
    {path: 'angular', component: AngularBlogsComponent},
];
