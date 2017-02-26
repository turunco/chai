// chai test : http://chaijs.com/api/bdd/
console.log('practice bdd');
var expect = require('chai').expect;

// .not
var foo;
expect(foo).not.to.equal(123);
expect(foo).to.not.equal(123);


// .deep
expect({ param: { foo: 'foo', bar: 'bar' } }).to.have.deep.property('param.foo', 'foo');


// .any
expect({ param: '0', param1: '1' }).to.have.any.keys('param1');
expect({ param: '0', param1: '1' }).to.have.any.keys('param1', 'XXXXX');
// expect({ param: '0', param1: '1' }).to.have.any.keys('XXXXX');		// assert


// .all
// expect({ param: '0', param1: '1' }).to.have.all.keys('param');		// assert
expect({ param: '0', param1: '1' }).to.have.all.keys('param', 'param1');


// .a(type)/.an(type)
expect('abc').to.be.a('string');
expect(2).to.be.a('number');
expect({}).to.be.a('object');
expect({}).to.be.an('object');
expect([]).to.be.a('array');
expect([]).to.be.an('array');
expect(true).to.be.a('boolean');
expect(null).to.be.a('null');
expect(undefined).to.be.a('undefined');
expect(undefined).to.be.an('undefined');
expect(function() { return 0; }).to.be.a('function');


// .include/.contain
expect([1, 2, 3]).to.include(2);
expect([1, 2, 3]).to.contain(2);
expect('foobar').to.include('ob');
expect({ param: '0', param1: '1' }).to.include.keys('param1');


// .ok
expect('param').to.be.ok;
expect(0).not.to.be.ok;
expect(1).to.be.ok;
expect(true).to.be.ok;
expect(false).not.to.be.ok;
expect(null).not.to.be.ok;
expect(undefined).not.to.be.ok;


// .true
expect(true).to.be.true;
expect(1).not.to.be.true; // @@


// .false
expect(false).to.be.false;
expect(0).not.to.be.false; // @@


// .null
expect(null).to.be.null;
expect(undefined).not.to.be.null;


// .null
expect(undefined).to.be.undefined;
expect(null).not.to.be.undefined;


// .NaN
expect('param').to.be.NaN;
expect(2).not.to.be.NaN;


// .exist	- Asserts that the target is neither null nor undefined.
var foo = 'foo';
var bar = null;
var baz;
expect(foo).to.exist;
expect(bar).not.to.exist;
expect(baz).not.to.exist;


// .empty
expect([]).to.be.empty;
expect({}).to.be.empty;
expect('').to.be.empty;


// .equal
expect('abc').to.equal('abc');
// expect('2').to.equal(2);		// assert
expect(2).to.equal(2);
// expect([1, 2, 3]).to.equal([1, 2]);		// assert
// expect([1, 2, 3]).to.equal([1, 2, 3]);	// assert
// expect({ param: '0', param1: '1' }).to.equal({ param: '0', param1: '2' });	// assert
// expect({ param: '0', param1: '1' }).to.equal({ param: '0', param1: '1' });	// assert
expect({ param: '0', param1: '1' }).to.deep.equal({ param: '0', param1: '1' });


// .eql
expect([1, 2, 3]).to.eql([1, 2, 3]);
expect({ param: '0', param1: '1' }).to.eql({ param: '0', param1: '1' });


// .above
expect(10).to.be.above(5);
// expect(10).to.be.above(10);	// assert
expect('foo').to.have.length.above(2);
expect([1, 2, 3]).to.have.length.above(2);


// .least
expect(10).to.be.at.least(5);
expect(10).to.be.at.least(10);
expect('foo').to.have.length.at.least(2);
expect([1, 2, 3]).to.have.length.at.least(2);


// .below
expect(5).to.be.below(10);
expect('foo').to.have.length.below(4);
expect([1, 2, 3]).to.have.length.below(4);


// .within
expect(7).to.be.within(5, 10);
expect('foo').to.have.length.within(2, 4);
expect([1, 2, 3]).to.have.length.within(2, 4);


// .instanceof
var Foo = function() { return 0; };
var foo0 = new Foo();
expect(foo0).to.be.instanceof(Foo);
expect([1, 2, 3]).to.be.instanceof(Array);


// .property
var obj = { foo: 'bar' };
expect(obj).to.have.property('foo');
expect(obj).to.have.property('foo', 'bar');
expect(obj).to.have.property('foo', 'bar', 'baz');
// expect(obj).to.have.property('abc');			// assert

var deepObj = {
    param: { child: '0' },
    param1: ['100', '200', { ccc: '1000' }]
};
expect(deepObj).to.have.deep.property('param.child', '0');
expect(deepObj).to.have.deep.property('param1[1]', '200');
expect(deepObj).to.have.deep.property('param1[2].ccc', '1000');
// expect(deepObj).to.have.deep.property('param1[2].ccc', 'xxxx');		// assert

var arr = [
    ['0', '1', '2'],
    [
        { param: '00' },
        { param1: '11' },
        { param2: '22' }
    ]
];
expect(arr).to.have.deep.property('[0][1]', '1');
expect(arr).to.have.deep.property('[1][2].param2', '22');

expect(obj).to.have.property('foo').that.is.a('string');


// .length
expect('foo').to.have.length.above(2);
expect([1, 2, 3]).to.have.length.above(2);


// .lengthOf
expect([1, 2, 3]).to.have.lengthOf(3);
expect('foo').to.have.lengthOf(3);


// .match
expect('foobar').to.match(/^foo/);


// .string -  the string target contains another string.
expect('foobar').to.have.string('bar');