/**
 * @author Manjeet
 */
Testing.AppsFixturesDataSource = SC.FixturesDataSource.extend({

 
  latency: 500 , fetch: function(store, query) {

  SC.Request.getUrl('/user').json()

    .notify(this, this.didFetchContacts, store, query)

    .send()

},

 

didFetchContacts: function(response, store, query) {

  if (SC.ok(response)) {

    store.loadRecords(MyApp.Contact, response.get('body'));

  } else store.dataSourceDidErrorQuery(query, response);

},
});
