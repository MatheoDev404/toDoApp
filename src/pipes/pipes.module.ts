import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
import { TaskFilterPipe } from './task-filter/task-filter';
@NgModule({
	declarations: [MomentPipe,
    TaskFilterPipe],
	imports: [],
	exports: [MomentPipe,
    TaskFilterPipe]
})
export class PipesModule {}
