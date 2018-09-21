import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredGames'
})
export class FeaturedGamesPipe implements PipeTransform {

  transform(items: Array<any>, args?: any): Array<any> {
    return items.filter(item => item.acf.featured);
  }

}
