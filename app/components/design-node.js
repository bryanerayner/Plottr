export default Ember.Component.extend({
  classNames: ['component', 'design-node'],
  tag:"div",
  attributeBindings: ['d_style'],
  d_style: function(){
  return 'stuff';
  }
});
