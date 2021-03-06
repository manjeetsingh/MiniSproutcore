/**
 * @author Manjeet
 */
Faces.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'topView mainView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: {top: 0, left: 0, right: 0, height: 36},
      anchorLocation: SC.ANCHOR_TOP,
      childViews: 'labelView addButton'.w(),
      
      labelView: SC.LabelView.design({
        layout: {centerY: 0, height: 24, left: 8, width: 200},
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: ' Faces'
      }),
      addButton: SC.ButtonView.design({
        layout: {centerY: 0, height: 24, right: 12, width: 100},
        title: 'Add Yourself',
        target: 'Faces.peopleController',
        action: 'addPerson'
      })
    }),
    
    mainView: SC.ScrollView.design({
      layout: {top: 36, left: 0, right: 0, bottom: 0},
      backgroundColor: '#fff',
      contentView: SC.GridView.design({
        layout: {top: 10, left: 10, right: 10, bottom: 10},
        rowHeight: 200,
        columnWidth: 200,
        contentValueKey: 'name',        
        classNames: ['face'],
        contentBinding: 'Faces.peopleController.arrangedObjects',
        selectionBinding: 'Faces.peopleController.selection',
        exampleView: Faces.FaceView,
        target: 'Faces.personController',
        action: 'visitWebsite',
        actOnSelect: YES
      })
    })
    
  })

});
