import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  getCocktails(): Array<Cocktail> {
    return [
      new Cocktail('Margarita', 1, 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/margaritas-209d9d.jpg'),
      new Cocktail('Mojito', 10, 'https://tse3.mm.bing.net/th?id=OIP.G3qYYBee47JNPGDka3LvagHaHa&pid=Api'),
      new Cocktail('Punch', 2, 'https://www.siroter.com/cocktails/killer-bee-punch-cocktail-667.jpg'),
      new Cocktail('Pina colada', 4, 'https://www.foodwithlove.de/wp-content/uploads/2016/07/Pina-Colada-4.jpg')
    ]
  }
}
