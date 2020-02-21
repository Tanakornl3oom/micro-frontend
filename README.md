# micro-frontend

- set up single-spa to connect more framework
- add event listener in html

  Ex. no parameter

  ```
      window.addEventListener("name Evnet", do somethings.... );
  ```

  Ex. with parameter

  ```
      window.addEventListener("name Evnet", ( parameter ) =>
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
