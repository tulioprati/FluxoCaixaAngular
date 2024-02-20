import * as moment from 'moment';
import {Moment} from 'moment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDate {
  convertDate(date: Moment): Moment {
    const format = 'DD/MM/YYYY';

    const dateHour = date + ' 00:00:00';

    const momentData = moment(dateHour, 'DD/MM/YYYY HH:mm:ss');

    return momentData;
  }

converterInstantParaDataBrasileira(instant: Moment): string {

    return instant.format('DD/MM/YYYY');
  }
}
