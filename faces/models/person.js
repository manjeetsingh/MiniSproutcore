/**
 * @author Manjeet
 */
/** @class

  (Document your Model here)

*/
Faces.Person = SC.Record.extend(
 {
  name: SC.Record.attr(String),
  company: SC.Record.attr(String),
  website: SC.Record.attr(String),
  picture: SC.Record.attr(String)

}) ;
