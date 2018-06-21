import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Task } from '../../models/task';
import { TaskProvider } from '../../providers/task/task';
import moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  ngOnInit(): void {
    // Au chargement je récupère les tâches sauvegardées
    this.taskProvider.get().then(tasks => {
      if(null !== tasks){
        this.tasks = tasks;
      }
    });
  }

  constructor(public navCtrl: NavController,
              public taskProvider : TaskProvider) {

  }

  task: Task      = new Task();

  tasks: Task[]   = [];

  active: boolean = true;

  date: Date      = new Date();
  now: string     = moment().format('YYYY-MM-DD');


  // déclanche l'enregistrement d'une nouvelle tâche
  saveTask(): void{
    
    // Si l'utilisateur a remplis le champ alors :
    if(undefined !== this.task.name && "" !== this.task.name){

      //on ajoute l'id sur un timestamp pour que ce soit unique
      this.task.id = Date.now();
      // on ajoute la task au tableau de task: tasks
      this.tasks.push(this.task);
      //puis on ajoute le tout au storage
      this.taskProvider.save(this.tasks);
      
      // Puis on réinitialise le formulaire
      this.task = new Task();
      this.active = false;
      setTimeout(()=> this.active = true, 0)
    }

  }

  // déclanche l'enregistrement lors de la pression sur "entrer" (keycode = 13)
  checkKey(keyCode: number): void{
    if (keyCode === 13) {
      this.saveTask();
    }
  } 

  //Enregistre les tâches
  saveOurTasks(){
    this.taskProvider.save(this.tasks);
  }

  // Suprimer une tache
  deleteTask(task: Task):void {
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.taskProvider.save(this.tasks);
  }

}