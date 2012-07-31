

Testing.mainPage = SC.Page.design({
 
  mainPane: SC.MainPane.design({
    childViews: ' labelView ButtonView descriptionLabel firstName descriptionLabel2 lastName menu1'.w(),

    labelView: SC.LabelView.design({
      layout: { top: 10, left: 360, width: 235, height: 29 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
     classNames: "label1",
      value: "Welcome to SproutCore!"
    }),
     descriptionLabel: SC.LabelView.design({
            layout: { top: 45, left: 20, width: 70, height: 18 },
            textAlign: SC.ALIGN_RIGHT,
            value: "firstName:" 
          }),
           firstName: SC.TextFieldView.design({
            layout: { top: 45, left: 240, height: 80, width: 600 },
            hint: "Enter first name".loc(),
            isTextArea: YES,
            valueBinding: "Testing.taskController.firstName"
          }),
          
        
          descriptionLabel2: SC.LabelView.design({
            layout: {  top: 146, left: 20, height: 40, width: 70 },
            textAlign: SC.ALIGN_RIGHT,
            value: "lastName:" 
          }),
          lastName: SC.TextFieldView.design({
            layout: { top: 146, left: 240, height: 20, width: 600 },
            hint: "Enter last name".loc(),
            isTextField: YES,
            valueBinding: "Testing.taskController.lastName"
          }),
       ButtonView: SC.ButtonView.design({
      layout: { top: 246, left: 340, height: 24, width: 85},
     textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      title: "SAVE TASK".loc(),
      value: "Welcome to SproutCore!",
      action:'confirm',
     target:"Testing.taskController"
    }),
    
    
    menu1:SC.MenuPane.design({
    	layout: { top: 220, left: 100, height: 110, width: 85},
    	isSeparator: YES ,
    	 itemsBinding: SC.Binding.oneWay('Testing.taskController.items'),
           
           itemTitleKey: 'title',
             itemActionKey: 'action',
             target:'Testing.taskController'
            
         
     
 
            
})
 
    
  })
 
});
