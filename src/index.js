import { fromEvent } from "rxjs";

const $button = document.getElementById("main-button");
const click$ = fromEvent($button, "click");
const subscription = click$.subscribe({
  next: event => console.log("Event :", event),
});
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);