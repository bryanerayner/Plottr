var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  
  this.resource('design', {path : '/design/:design_id'}, function() {
	this.route('new');
	this.route('edit');
	this.resource('modes', {path: '/modes/:mode_id'}, function(){
		this.route('delete');
		this.route('new');
		this.route('edit');
	});
  });

});

export default Router;