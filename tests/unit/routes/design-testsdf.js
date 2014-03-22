import { test, moduleFor } from 'ember-qunit';


import Index from 'appkit/routes/design';

moduleFor('route:design', "Unit - DesignRoute");

test("it exists", function(){
  ok(this.subject() instanceof Index);
});

test("#model", function(){
  deepEqual(this.subject().model(), ['red', 'yellow', 'blue']);
});
