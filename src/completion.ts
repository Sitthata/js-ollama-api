import { getCompletion } from "./api";

const response = await getCompletion(`Who is the student in this course?`);

console.log(response.choices[0].message.content);