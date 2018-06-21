import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

import { Storage } from '@ionic/storage';

// Le but de notre provider: 
// ajouter et recuperer des tâches

@Injectable()
export class TaskProvider {

  constructor(private storage: Storage) {
  }

  //permet de sauvegarder toutes les taches
  save(tasks: Task[]): void{
    this.storage.set('tasks', tasks)
  }

  // permet de récuperer les tâches sauvegardées
  get(): Promise<Task[]>{
    return this.storage.get('tasks');
  }

}
