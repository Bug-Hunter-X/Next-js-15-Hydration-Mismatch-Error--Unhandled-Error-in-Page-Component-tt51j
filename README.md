# Next.js 15 Hydration Mismatch: Unhandled Error in Page Component

This repository demonstrates a common hydration mismatch error in Next.js 15 that can occur when an unexpected error is thrown during the rendering of a page component.  The error is intentionally introduced in `pages/about.js`.  This example showcases how to properly handle such errors to prevent hydration mismatches.

## Problem

When an error occurs on the server-side during rendering, Next.js attempts to hydrate the client-side with the rendered HTML. If the client-side rendering encounters a different state or error, a hydration mismatch occurs, leading to unexpected behavior and a potential crash.

## Solution

The solution involves using `Error Boundaries` which Next.js already support, in combination with proper error handling in your page components to gracefully handle exceptions before they reach the hydration process. 