import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../../models/task";
import * as _ from "lodash";

/**
 * Generated class for the TaskFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(tasks: Task[], status: boolean): Task[] {
    return _.filter(tasks, { 'status' : status });
  }
}
