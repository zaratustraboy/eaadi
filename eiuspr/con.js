class Example {
    constructor() {
        this.unresolved = [];

        // Assume some asynchronous operation
        setTimeout(() => {
            console.log("Async operation complete!");
            this.resolve(); // Call resolve function when async is done
        }, 1000);
    }

    resolve() {
        // Push functions to be executed once resolved
        this.unresolved.push(() => console.log("Function 1"));
        this.unresolved.push(() => console.log("Function 2"));

        // Execute all unresolved functions
        (this.unresolved || []).forEach(fn => fn());
    }
}

// Usage
const example = new Example();
