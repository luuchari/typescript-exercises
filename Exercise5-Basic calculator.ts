class Calculator {
    // Validate that the input is a number
    private validateInput(value: any): void {
        if (typeof value !== 'number') {
            throw new Error('Invalid input: not a number');
        }
    }

    // Add function
    add(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        return a + b;
    }

    // Minus function
    subtract(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        return a - b;
    }

    // Multiply function
    multiply(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        return a * b;
    }

    // Divide function with division by zero check
    divide(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        if (b === 0) {
            throw new Error('Division by zero error');
        }
        return a / b;
    }
}
