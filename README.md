An exercise using React with a stateful Component. 
Based on the following brief (by our teacher https://github.com/foobaroo): 
Create an app with two stateful components
1. Create a new app with create-react-app.
2. The app component consists of a left and a right div. In the left div, there is a button “New Image” and
on the right side there is a list of Picture components. Picture is a stateful component, not a functional
stateless.
3. Implement the component lifecycle methods componentWillMount(), componentDidMount(),
componentWillReceiveProps(), shouldComponentUpdate(), componentWillUpdate(),
componentDidUpdate(), componentWillUnmount() in the Picture component. In each method
console.log tells the user about the component’s stage in the lifecycle.
3. When the Picture component is loaded, a new random image from
https://picsum.photos/100/100/?image=15 will be loaded whereas 15 is a random number between 1
and 1000.
4. If the user clicks “New Image”, a new Picture component will be inserted.
5. Each Picture component should have an “X” button which deletes it and an “+” button which loads a
new random picture from Picsum.
6. Notice that you have two states, one in the App component and one in the Picture component.