var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
	title: ''
});
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.InboxView = Ember.View.extend({
    templateName: 'inbox'
});

App.SentView = Ember.View.extend({
    templateName: 'sent'
});

App.DraftsView = Ember.View.extend({
    templateName: 'drafts'
});

App.EmailView = Ember.View.extend({
    templateName: 'email'
});

App.ComposeView = Ember.View.extend({
    templateName: 'compose'
});

App.ContactsView = Ember.View.extend({
    templateName: 'contacts'
});

App.NewContactsView = Ember.View.extend({
    templateName: 'new-contacts'
});

App.EditContactsView = Ember.View.extend({
    templateName: 'edit-contacts'
});

App.Router = Ember.Router.extend({
  enableLogging: true,
  root: Ember.Route.extend({
  	showInbox: Ember.Route.transitionTo('index'),
    showSent: Ember.Route.transitionTo('sent'),
    showEmail: Ember.Route.transitionTo('email'),
    showDrafts: Ember.Route.transitionTo('drafts'),
    showCompose: Ember.Route.transitionTo('compose'),
    showContacts: Ember.Route.transitionTo('contacts'),
    addContact: Ember.Route.transitionTo('newContact'),
    editContact: Ember.Route.transitionTo('changeContact'),
    removeContact: Ember.Route.transitionTo('deleteContact'),
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router){
      	router.get('applicationController').set('title','Inbox');
      	router.get('applicationController').connectOutlet('inbox');
      }
    }),
    sent: Ember.Route.extend({
    	route: '/sent',
    	connectOutlets: function(router){
    		router.get('applicationController').set('title','Sent')
    		router.get('applicationController').connectOutlet('sent');
    	}
    }),
    drafts: Ember.Route.extend({
    	route: '/drafts',
    	connectOutlets: function(router){
    		router.get('applicationController').set('title','Drafts');
    		router.get('applicationController').connectOutlet('drafts');
    	}
    }),
    email: Ember.Route.extend({
    	route: '/read',
    	connectOutlets: function(router){
    		router.get('applicationController').set('title','Subiect mesaj');
    		router.get('applicationController').connectOutlet('email');
    	}
    }),
    compose: Ember.Route.extend({
    	route: '/compose',
    	connectOutlets: function(router){
    		router.get('applicationController').set('title','New email');
    		router.get('applicationController').connectOutlet('compose');
    	}
    }),
    contacts: Ember.Route.extend({
    	route: '/contacts',
    	connectOutlets: function(router){
    		router.get('applicationController').set('title','Contacts');
    		router.get('applicationController').connectOutlet('contacts');
    	}
    }),
    newContact: Ember.Route.extend({
    	route: '/contacts/add',
    	connectOutlets: function(router){
    		router.get('applicationController').set('title','Contacts');
    		router.get('applicationController').connectOutlet('newContacts');
    	}
    }),
    changeContact: Ember.Route.extend({
        route: '/contacts/edit',
        connectOutlets: function(router){
            router.get('applicationController').set('title','Contacts');
            router.get('applicationController').connectOutlet('editContacts');
        }
    }),
  })
})

App.initialize();