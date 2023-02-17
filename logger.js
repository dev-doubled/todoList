export default function logger(reducer) {
   return (prevState, action, args) => {
      const nextStage = reducer(prevState, action, args);
      return nextStage
   }
}