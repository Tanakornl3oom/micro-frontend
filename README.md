# micro-frontend

## prerequisites

- single spa framework
- listener on html
- framework frontend ( react, vue angular, ... )
- webpack

## Concept

- concept https://micro-frontends.org/

## Setup and Examples

- set up single-spa to connect more framework (https://single-spa.js.org/)
- add event listener in html

  Ex. no parameter

  ```
      window.addEventListener("name Evnet", do somethings.... );
  ```

  Ex. with parameter

  ```
      window.addEventListener("name Evnet", ( paramaterFunction ) =>
            paramaterFunction.detail.key
            do something
      );
  ```

  or

  ```
      window.addEventListener("name Evnet", ( {detail} ) =>
            detail.key
            do something
      );
  ```

- dispatch event

  Ex. no parameter

  ```
      let event = new Event("name Event")
      window.dispatchEvent(event);
  ```

  EX. with parameters

  ```
      let event = new CustomEvent("name Event", { key : value });
      window.dispatchEvent(event);
  ```

## How to run

- install with npm or yarn

  ```
  npm install
  or
  yarn
  ```

- run

  ```
  npm start
  or
  yarn start
  ```

  check at http://localhost:8080

  - the first component is a button, Second component is a body that shows content when click button at first component body content on the second component will change.
