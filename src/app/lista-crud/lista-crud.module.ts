import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCrudComponent } from './component';
import { ListaCrudRoutingModule } from './listacrud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from '@app/shared/pipe/capitalize.pipe';

@NgModule({
  declarations: [ListaCrudComponent, CapitalizePipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ListaCrudRoutingModule],
})
export class ListaCrudModule {}
