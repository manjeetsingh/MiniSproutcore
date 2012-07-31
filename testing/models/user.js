/**
 * @author Manjeet
 */
Testing.User = SC.Record.extend({
	primaryKey: 'uid',
  firstName: SC.Record.attr(String, { defaultValue: 'Unspecified' }),
  lastName: SC.Record.attr(String, { defaultValue: 'Unspecified' }),
});
