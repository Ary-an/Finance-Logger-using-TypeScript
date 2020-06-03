import { HasFormatter } from "../formatter/HasFormatter";

export class invoice implements HasFormatter {
	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.client} owns ${this.amount} dollar and the want ${this.details}`;
	}
}
