Testing.taskController = SC.ObjectController.create({
	 confirm:function(){
      	alert(this.get('firstName')+" " +this.get('lastName'))
     },
   firstName: "",
   lastName:"",
    items: [
              { title: 'first', action: 'copyAction',isChecked: YES},
              { title: 'second', action: 'copyAction'},
              { title: 'third', action: 'copyAction'},
              { title: 'fourth', action: 'copyAction'}
            ],
   copyAction:function(){console.log(this.getPath('selection.firstObject'))}

 });
 
