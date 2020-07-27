# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @timajuma/lotide`

**Require it:**

`const _ = require('@timajuma/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return head (first element) of any array passed. returns 'underfined when an empty array is passed
* `tail(array)`: return tail (all elements except first) of any array passed. returns same as input when passed argument is not an array
* `middle(array)`: return one element from moddle if length of array is ODD, and 2 elements from middle when passed rray has EVEN length. returns an empty array when length of an array =<2;