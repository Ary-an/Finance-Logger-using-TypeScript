import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value;
    value = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new invoice(...value);
    }
    else {
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
