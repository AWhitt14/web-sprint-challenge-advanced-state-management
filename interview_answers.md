# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
it removes prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
store basically attaches the reducer to the app, the reducer manipulates the state, actions tell the reducer what to run and also passes along any needed information.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
it allows us to run functions asynconis. this means our actions can now ask for information (api call), wait for a response, and then give the responce to the reducer 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
I like redux because it can be used to organize larger applications.