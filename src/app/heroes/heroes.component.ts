import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROS;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    
    this.selectedHero = { id: null,    name: '' };
    //{{ data?.record ? data.record['name/first'] : null}}
  }

  onSelect(herro: Hero): void{
    this.selectedHero = herro;
  }

}
