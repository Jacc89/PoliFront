import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone  : true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    { title: 'Assessoria Empresarial', desc: 'Descrição do serviço aqui...' },
    { title: 'Contábil', desc: 'Descrição do serviço aqui...' },
    { title: 'Recursos Humanos', desc: 'Descrição do serviço aqui...' },
    { title: 'Fiscal', desc: 'Descrição do serviço aqui...' },
    { title: 'Societário', desc: 'Descrição do serviço aqui...' },
    { title: 'Planejamento Tributário', desc: 'Descrição do serviço aqui...' },
  ];

}
