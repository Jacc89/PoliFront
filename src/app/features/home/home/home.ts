import { Component } from '@angular/core';
import { Footer } from '../../../core/layout/footer/footer';
import { Header } from '../../../core/layout/header/header';
import { ContactComponent } from "../contact/contact.component";
import { HeroComponent } from "../hero/hero.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { MisionVisonComponent } from "../MisionVison/MisionVison.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, ContactComponent, HeroComponent, ServiciosComponent, MisionVisonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
