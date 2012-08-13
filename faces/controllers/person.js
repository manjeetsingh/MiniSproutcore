/**
 * @author Manjeet
 */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Faces.personController = SC.ObjectController.create(
{

  pane: null,

  contentBinding: 'Faces.peopleController.selection',
  contentBindingDefault: SC.Binding.single(),
  
  visitWebsite: function() {
    if(this.get('content')) {
      if (this.get('content').get('website') != '') {
        window.location = this.get('content').get('website');
      }
    }
  }

}) ;
