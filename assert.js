// chai test : http://chaijs.com/api/assert/
console.log('practice assert');
var assert = require('chai').assert;

/// assert

assert('foo' === 'foo', 'foo is foo');
assert(typeof(123) === 'number', '123 is number');

// assert.fail();


// Asserts that object is truthy/falsy.
assert.isOk('abc', 'abc is truthy');
assert.isOk(123, 'number is truthy');
assert.isOk(Array(), 'Array is truthy');
assert.isOk([], 'Array is truthy');
assert.isOk(true, 'true is truthy');
assert.isNotOk(false, 'false is not truthy');
assert.isNotOk(undefined, 'undefined is not truthy');
assert.isNotOk(null, 'null is not truthy');


// Asserts non-strict inequality (==/!=) of actual and expected.
assert.equal(2, 2, '== 2');
assert.equal(2, '2', '== coerces values to strings');
assert.equal('abc', 'abc', '== abc');
assert.notEqual(2, 3, 'these numbers are not equal');
assert.notEqual(2, '3', 'these numbers are not equal');
assert.notEqual('abc', 'def', 'these strings are not equal');


// Asserts non-strict inequality (===/!==) of actual and expected.
assert.strictEqual(2, 2, '== 2');
// assert.strictEqual(2, '2', '== 2'); // assert
assert.strictEqual('abc', 'abc', '== abc');
assert.notStrictEqual(2, 3, 'these numbers are not equal');
assert.notStrictEqual('abc', 'def', 'these strings are not equal');
assert.notStrictEqual(2, '2', '!== 2');


//
assert.deepEqual({ date: '02/25' }, { date: '02/25' });
assert.deepEqual({ date: '02/25', year: 2017 }, { date: '02/25', year: 2017 });
// assert.deepEqual({ date: '02/25', year: 2017 }, { date: '02/25', year: 1917 });	// assert
assert.notDeepEqual({ date: '02/25', year: 2017 }, { date: '02/25', year: 1917 });


// >
assert.isAbove(5, 2); // 5 > 2
//assert.isAbove(5, 5); // 5 == 5	// assert
// >=
assert.isAtLeast(5, 2); // 5 > 2
assert.isAtLeast(5, 5); // 5 == 5
// <
assert.isBelow(2, 5);
// assert.isBelow(2, 2);	// assert
// <=
assert.isAtMost(2, 5);
assert.isAtMost(2, 2);


// true/false
assert.isTrue(true);
assert.isNotTrue(false);
assert.isFalse(false);
assert.isNotFalse(true);


// null/NaN(Not a Number)
assert.isNull(null);
// assert.isNull(0);	// assert
assert.isNotNull(2);
assert.isNotNull('abc');
assert.isNotNull(Array);
// assert.isNaN(2);		// assert
assert.isNaN('abc');
assert.isNotNaN(2);


//
var param;
assert.isUndefined(param);
param = 123;
assert.isDefined(param);


//
function func() { return 0; }
assert.isFunction(func);
assert.isNotFunction(param);

assert.isObject({ name: 'abc', name2: 'def' });
assert.isNotObject(123);

assert.isArray([1, 2, 3]);
assert.isNotArray(1);

assert.isString('abc');
assert.isNotString(123);

assert.isBoolean(true);
assert.isBoolean(false);
assert.isNotBoolean(1);
assert.isNotBoolean('abc');


//
assert.typeOf({ name: 'abc' }, 'object');
assert.typeOf([], 'array');
assert.typeOf(123, 'number');
assert.typeOf('abc', 'string');
assert.typeOf(/reg/, 'regexp');
assert.typeOf(null, 'null');
assert.typeOf(undefined, 'undefined');
assert.notTypeOf(123, 'undefined');


//
var Func0 = function() { return 0; };
var inst0 = new Func0();
assert.instanceOf(inst0, Func0);
inst0 = new String();
assert.notInstanceOf(inst0, Func0);


//
assert.include('foobar', 'bar');
assert.include([1, 2, 3], 3);
assert.notInclude('foobar', 'hoge');
assert.notInclude([1, 2, 3], 4);


//
assert.match('foobar', /^foo/);
assert.notMatch('foobar', /foo^/);


//
assert.property({ param: { arg0: 'abc', arg1: 'def' } }, 'param');
// assert.property({ param: { arg0: 'abc', arg1: 'def' } }, 'arg0');	// assert
assert.notProperty({ param: { arg0: 'abc', arg1: 'def' } }, 'param10');
assert.deepProperty({ param: { arg0: 'abc', arg1: 'def' } }, 'param.arg1');
assert.notDeepProperty({ param: { arg0: 'abc', arg1: 'def' } }, 'param.arg3');

assert.propertyVal({ param: 'foo' }, 'param', 'foo');
assert.propertyNotVal({ param: 'foo' }, 'param', 'bar');
assert.deepPropertyVal({ param: { arg0: 'abc', arg1: 'def' } }, 'param.arg1', 'def');
assert.deepPropertyNotVal({ param: { arg0: 'abc', arg1: 'def' } }, 'param.arg1', 'foo');


//
assert.lengthOf([1, 2, 3], 3);
assert.lengthOf('foo', 3);