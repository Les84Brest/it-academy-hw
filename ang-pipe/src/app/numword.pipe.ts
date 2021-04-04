import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "numword",
  pure: true,
})
export class NumwordPipe implements PipeTransform {

  transform(cnt: number, word1: string, word2: string, word5: string): string {
    let dd = cnt % 100;
    
    if ((dd >= 11) && (dd <= 19)) {
      return `${cnt} ${word5}`;
    }
    let d = cnt%10;

    if (d == 1)
      return `${cnt} ${word1}`;  
    if ((d >= 2) && (d <= 4))
      return `${cnt} ${word2}`;

    return `${cnt} ${word5}`;
  }

}


// function getNumWord(num,word1,word2,word5) {
//   var dd=num%100;
//   if ( (dd>=11) && (dd<=19) )
//       return word5;
//   var d=num%10;
//   if ( d==1 )
//       return word1;
//   if ( (d>=2) && (d<=4) )
//       return word2;
//   return word5;
// }