import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

 
  transform(value: any, input: string, searchableList: any) {
    if (input.toString().length > 2) {
        input = input.toString().toLowerCase();
        return value.filter(function (el: any) {
            var isTrue = false;
            for (var k in searchableList) {
                if (el[searchableList[k]].toString().toLowerCase().indexOf(input) > -1) {
                    isTrue = true;
                }
                if (isTrue) {
                    return el
                }
            }
        })
    }
    return value;
}
}



@Pipe({
  name: 'JArrayFilter',
  pure: false
})

export class JSONArrayFilterPipe implements PipeTransform {    
  transform(array: any[], valueToSearch: string): any {
      return array.filter(item => item.make_name.indexOf(valueToSearch) !== -1);
    }
}

@Pipe({name: 'convertFrom24To12Format'})
export class TimeFormat implements PipeTransform {
   transform(time: any): any {
       let hour = (time.split(':'))[0]
       let min = (time.split(':'))[1]
       let part = hour > 12 ? 'pm' : 'am';
       if(parseInt(hour) == 0)
        hour = 12;
       min = (min+'').length == 1 ? `0${min}` : min;
       hour = hour > 12 ? hour - 12 : hour;
       hour = (hour+'').length == 1 ? `0${hour}` : hour;
       return `${hour}:${min} ${part}`
     }
 }


