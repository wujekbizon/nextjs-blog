// create debounce fn
function debounce<T extends (...args: any[]) => any>(fn: T, interval: number): (...args: Parameters<T>) => void {
  // Initialize timeoutId outside of returned function.
  let timeoutId: NodeJS.Timeout | number | undefined = undefined

  // This is the debounced function that will be returned and executed later
  return (...args: Parameters<T>) => {
    // Clear previous timeout before setting new one
    clearTimeout(timeoutId)
    // Set a new timeout and save its ID to timeoutId variable
    timeoutId = setTimeout(() => {
      // Apply the original function with the provided arguments
      fn(...args)
    }, interval)
  }
}

export default debounce
