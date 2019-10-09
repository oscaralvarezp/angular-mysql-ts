import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3 ) return value;
    const resultGames = [];
    for (const game of value) {
      if (game.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultGames.push(game);
      }
    }
    return resultGames;
  }

}
