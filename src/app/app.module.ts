import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NotesComponent } from './notes/notes.component';
import { NewListComponent } from './new-list/new-list.component';
import { DrawingNoteComponent } from './drawing-note/drawing-note.component';
import { ImageNoteComponent } from './image-note/image-note.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NotesComponent,
    NewListComponent,
    DrawingNoteComponent,
    ImageNoteComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: NotesComponent },
      { path: 'newlist', component: NewListComponent },
      { path: 'drawing', component: DrawingNoteComponent },
      { path: 'image', component: ImageNoteComponent }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
