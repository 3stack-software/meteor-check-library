"use strict";

var _randomIdRegexp = /^[23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz]{17}$/,
    _emailAddressRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    _nonNegativeDecimalStringRegexp = /^([1-9]\d*|0)(\.\d+)?$/,
    _positiveIntegerRegexp = /^[1-9]\d*$/,
    HexColour;

MatchLib = {

  Optional: function (type) {
    return Match.Where(function (x) {
      if (x == null) {
        return true;
      }
      check(x, type);
      return true;
    });
  },

  NullOr: function (type) {
    return Match.Where(function (x) {
      if (x === null) {
        return true;
      }
      check(x, type);
      return true;
    });
  },

  NonEmptyString: Match.Where(function (x) {
    check(x, String);
    return x.length > 0;
  }),

  RandomId: Match.Where(function (x) {
    check(x, MatchLib.NonEmptyString);
    return _randomIdRegexp.test(x);
  }),

  NonNegativeNumber: Match.Where(function (x) {
    check(x, Number);
    return !isNaN(x) && x >= 0;
  }),

  PositiveNumber: Match.Where(function (x) {
    check(x, Number);
    return !isNaN(x) && x > 0;
  }),

  NonNegativeInteger: Match.Where(function (x) {
    check(x, Match.Integer);
    return x >= 0;
  }),

  PositiveInteger: Match.Where(function (x) {
    check(x, Match.Integer);
    return x > 0;
  }),

  IntegerBetween: function (min, max) {
    return Match.Where(function (x) {
      check(x, Match.Integer);
      return min <= x && x <= max;
    });
  },

  NonNegativeIntegerString: Match.Where(function (x) {
    check(x, String);
    return x.length > 0 && ((x.length === 1 && x[0] === "0") || _positiveIntegerRegexp.test(x));
  }),

  NonNegativeDecimalString: Match.Where(function (x) {
    check(x, String);
    return _nonNegativeDecimalStringRegexp.test(x);
  }),

  EmailAddress: Match.Where(function (x) {
    check(x, MatchLib.NonEmptyString);
    return _emailAddressRegexp.test(x);
  }),
  NonEmptyArray: Match.Where(function (x) {
    check(x, Array);
    return x.length > 0;
  }),

  InArray: function (arr) {
    return Match.Where(function (x) {
      return _.indexOf(arr, x) !== -1;
    });
  },

  ArrayInArray: function (arr) {
    return Match.Where(function (x) {
      return _.difference(x, arr).length === 0;
    });
  },

  ObjectValues: function(m) {
    return function(o) {
      check(o, Object);
      check(_.values(o), [m]);
    }
  }
};

if ('3stack:colour' in Package){
  HexColour = Package['3stack:colour'].Colour.HexColour;
  _.extend(MatchLib, {
    HexColour: Match.Where(function (hex) {
      check(hex, MatchLib.NonEmptyString);
      return HexColour.isValid(hex);
    })
  });
}
