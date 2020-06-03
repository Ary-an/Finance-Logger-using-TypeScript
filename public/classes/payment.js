export class payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owns ${this.amount} dollar and the want ${this.details}`;
    }
}
