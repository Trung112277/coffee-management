import '@testing-library/jest-dom';

// Setup Jest types
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeTruthy(): R;
    }
  }
}
