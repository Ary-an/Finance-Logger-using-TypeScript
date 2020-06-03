import { HasFormatter } from "../formatter/HasFormatter";

export class payment implements HasFormatter {
	constructor(
		readonly recipient: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.recipient} owns ${this.amount} dollar and the want ${this.details}`;
	}
}
