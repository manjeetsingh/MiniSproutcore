


TodosTwo.mainPage = SC.Page.design({

mainPane: SC.MainPane.design({

childViews: [SC.PopupButtonView .design({
    value: "welcome",
    items: [
        { title: "Welcome", value: "welcome"},
        { title: "splitview", value: "contentView"},
    ],

    itemTitleKey: 'title',
    itemValueKey: 'value',

    userDefaultKey: "mainPane"
})]
}),

contentView: SC.SplitView.design({
  topLeftView: SC.SourceListView.create({
    contentValueKey: 'name',
    contentBinding: 'Tp.buildingBlockNodesController.content',
    selectionBinding: 'Tp.buildingBlockNodesController.selection',
  }),

  bottomRightView: SC.View.design({
      childViews: 'buildingBlockDetails'.w(),

      buildingBlockDetails: SC.View.design({
      layout: { top: 50, left: 50, bottom: 50, right: 50 },
      childViews: 'nameLabel'.w(),

      nameLabel: SC.LabelView.design({
        layout: { top: 40, width: 500, height: 18 },
        valueBinding: SC.Binding.oneWay('Tp.buildingBlockNodesController.name')
      }),
    })
  }) 
}),
welcome: SC.LabelView.design({
    escapeHTML: NO,
    value: "<h1>Sample Tankpit</h1><p>created with SproutCore</p>",
}), 
});
