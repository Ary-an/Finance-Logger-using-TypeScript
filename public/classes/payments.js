export class invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns ${this.amount} dollar and the want ${this.details}`;
    }
}
