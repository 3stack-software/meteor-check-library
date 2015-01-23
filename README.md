Match Library
=========================


An extension of `check` / `Match` helpers for advanced pattern matching.


Checks
-----------------

`MatchLib.Optional(other)`
Allows parameter to be null/undefined (Instead of `Match.Optional` which only allows)

`MatchLib.NullOr(other)`
Allows value to be null

`MatchLib.NonEmptyString`
Must be a string, of 1 or greater length

`MatchLib.RandomId`
Must match the length and allowed characters of the `random` package `Random.id()`.

`MatchLib.NonNegativeNumber`
Matches number x, where x >= 0

`MatchLib.PositiveNumber`
Matches number x, where x > 0

`MatchLib.NonNegativeInteger`
Matches Integer x, where x >=0

`MatchLib.PositiveInteger`
Matches Integer x, where x > 0

`MatchLib.IntegerBetween(min,max)`
Matches Integer x, where min <= x <= max

`MatchLib.NonNegativeIntegerString`
Matches a string of digits

`MatchLib.NonNegativeDecimalString`
Matches a string of digits with an optional decimal component

`MatchLib.EmailAddress`
Naive email address matching

`MatchLib.NonEmptyArray`
An array with `.length` > 0

`MatchLib.InArray(array)`
Matches `x` where `x` is a value in `array`

`MatchLib.ArrayInArray(array)`
Matches `x` where `x` in an array, and all values are contained in `array`


###if `3stack:colour` is available:

`Match.HexColour`
A valid hex colour.
