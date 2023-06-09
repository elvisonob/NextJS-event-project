import classes from './newsletter-registration.module.css';
import { useRef } from 'react';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  async function registrationHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)
    const enteredEmail = emailInputRef.current.value;
    // optional: validate input
    // send valid data to API
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: enteredEmail }),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button onClick={registrationHandler}>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
