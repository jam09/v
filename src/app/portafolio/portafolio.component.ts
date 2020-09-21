import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from '../services/cvabastidas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public cv: CvabastidasService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
  }

 


}
