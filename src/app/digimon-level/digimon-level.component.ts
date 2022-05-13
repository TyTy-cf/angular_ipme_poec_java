import { Component, OnInit } from '@angular/core';
import {HttpDigimonService} from "../../services/http-digimon.service";
import {ActivatedRoute} from "@angular/router";
import {Digimon} from "../../models/digimon";

@Component({
  selector: 'app-digimon-level',
  templateUrl: './digimon-level.component.html',
  styleUrls: ['./digimon-level.component.scss']
})
export class DigimonLevelComponent implements OnInit {

  digimons: Array<Digimon> = [];

  constructor(
    private httpDigimon: HttpDigimonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpDigimon.getDigimonsByLevel(params.digimonLevel).subscribe((jsonDigimon) => {
        this.digimons = jsonDigimon;
      })
    });
  }

}
