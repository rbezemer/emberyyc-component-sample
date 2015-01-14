import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement:function(){
    this.$('.quote-message').arctext({radius: 300});
  }
});
