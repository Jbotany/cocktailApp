import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Array<Cocktail> = this.cocktailService.getCocktails();

  constructor(public cocktailService: CocktailService) { }

  ngOnInit(): void {
  }
}
