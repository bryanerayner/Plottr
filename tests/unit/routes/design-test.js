import {test, moduleFor} from 'ember-qunit';

import Design from 'plottr/routes/';

moduleFor('route:design', 'Unit - Design Route');

test('it exists', function(){
	ok(this.subject() instanceof Design);
});

