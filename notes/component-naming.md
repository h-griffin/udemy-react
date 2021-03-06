## Function Components Naming
In the next lecture, we'll learn how to manage state in functional components (instead of class-based components).

In case you're getting an error with the code shown in the next lecture, simply assign a capitalized variable name to the variable that holds your functional component.

## Example:
Use
```const App = () => { ... }```

instead of
```const app = () => { ... }```

Technically, that's not required but depending on your project setup, the built-in linter (a code quality checking tool) that comes with create-react-app might not like the lowercase variable name.

You can also avoid this by creating projects with the **right react-scripts version**, which I would recommend for this course anyways [(see the setup video, lecture 26)](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/14320208)

```create-react-app my-app --scripts-version 1.1.5```