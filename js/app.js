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
/*
App.SearchView =  Ember.View.extend({
	templateName: 'search'
});

App.FoldersView =  Ember.View.extend({
	templateName: 'folders'
});

App.InboxMenuView =  Ember.View.extend({
	templateName: 'inbox-menu'
});

App.EmailListView = Ember.View.extend({
	templateName: 'email-list'
});

App.AttachmentsView = Ember.View.extend({
	templateName: 'attachments'
});

App.EmailAttachmentsView = Ember.View.extend({
	templateName: 'email-attachments'
});

App.EmailView = Ember.View.extend({
	templateName: 'email'
});

App.ComposeFormView = Ember.View.extend({
	templateName: 'compose'
});

App.ContactsListView = Ember.View.extend({
	templateName: 'contacts'
});

App.ContactsMenuView = Ember.View.extend({
	templateName: 'contacts-menu'
});

App.NewContactView = Ember.View.extend({
	templateName: 'new-contact'
});

App.EditContactView = Ember.View.extend({
	templateName: 'edit-contact'
});

App.InboxLeftView = Ember.ContainerView.extend({
	childViews: [App.SearchView.create(), App.FoldersView.create()]
});
App.InboxRightView = Ember.ContainerView.extend({
	childViews: [App.InboxMenuView.create(), App.EmailListView.create()]
});

App.EmailLeftView = Ember.ContainerView.extend({
	childViews: [App.EmailAttachmentsView.create(), App.FoldersView.create()]
});
App.EmailRightView = Ember.ContainerView.extend({
	childViews: [App.EmailView.create()]
});

App.SentLeftView = Ember.ContainerView.extend({
	childViews: [App.SearchView.create(), App.FoldersView.create()]
});
App.SentRightView = Ember.ContainerView.extend({
	childViews: [App.InboxMenuView.create(), App.EmailListView.create()]
});

App.DraftsLeftView = Ember.ContainerView.extend({
	childViews: [App.SearchView.create(), App.FoldersView.create()]
});
App.DraftsRightView = Ember.ContainerView.extend({
	childViews: [App.InboxMenuView.create(), App.EmailListView.create()]
});

App.ComposeLeftView = Ember.ContainerView.extend({
	childViews: [App.AttachmentsView.create(), App.ContactsListView.create()]
});
App.ComposeRightView = Ember.ContainerView.extend({
	childViews: [App.ComposeFormView.create()]
});

App.ContactsLeftView = Ember.ContainerView.extend({
	childViews: [App.ContactsListView.create()]
});
App.ContactsRightView = Ember.ContainerView.extend({
	childViews: [App.ContactsMenuView.create()]
});

App.AddContactsLeftView = Ember.ContainerView.extend({
	childViews: [App.ContactsListView.create()]
});
App.AddContactsRightView = Ember.ContainerView.extend({
	childViews: [App.ContactsMenuView.create(), App.NewContactView.create()]
});
*/
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