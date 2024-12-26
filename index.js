```javascript
// pages/about.js
import {ErrorBoundary} from 'next/error-boundary';

function MyErrorBoundary({error}){ //A custom ErrorBoundary Component
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p> 
    </div> 
  );
}

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Intentional Error');
  } catch (error) {
    // Handle the error gracefully
    return <p>An error occurred: {error.message}</p>;
  }
}

export function getStaticProps(){ //Optional getStaticProps for better error handling in SSG
    try{
        //Code that might throw an error
        return {props: {}}  
    } catch(error){
        console.log("Error in getStaticProps: ", error);
        return {
            props: {},
            revalidate: 1 // to revalidate the page after the error
        } 
    }
}
```