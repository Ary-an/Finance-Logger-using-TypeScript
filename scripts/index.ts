import { invoice } from "./classes/invoice.js";
import { HasFormatter } from "./formatter/HasFormatter.js";
import { payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	let value: [string, string, number];
	value = [toFrom.value, details.value, amount.valueAsNumber];

	let doc: HasFormatter;

	if (type.value === "invoice") {
		doc = new invoice(...value);
	} else {
		doc = new payment(...value);
	}

	list.render(doc, type.value);
});

//enum
// enum ResourceType {
// 	BOOKS,
// 	AUTHOR,
// 	PERSON,
// 	FILMS,
// 	DIRECTOR,
// }

//Generic
// interface Resource<T> {
// 	uid: number;
// 	resourceType: number;
// 	data: T;
// }

// const docOne: Resource<object> = {
// 	uid: 1,
// 	resourceType: ResourceType.PERSON,
// 	data: { title: "Aryan" },
// };

// console.log(docOne);

//tuple
// let arr: [string, number, boolean] = ["Aryan", 22, true];
