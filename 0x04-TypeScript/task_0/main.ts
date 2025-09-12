// js/main.ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Wambui",
  age: 22,
  location: "Mombasa"
};

const studentsList: Student[] = [student1, student2];

// Render a simple table into the DOM
const table = document.createElement("table");
table.style.borderCollapse = "collapse";

// header row
const header = table.insertRow();
const th1 = document.createElement("th");
th1.innerText = "First Name";
const th2 = document.createElement("th");
th2.innerText = "Location";
header.appendChild(th1);
header.appendChild(th2);

// rows
studentsList.forEach((s) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locCell = row.insertCell();
  nameCell.innerText = s.firstName;
  locCell.innerText = s.location;

  // minimal styling so it looks like a table
  [nameCell, locCell].forEach((c) => {
    (c as HTMLElement).style.border = "1px solid #ddd";
    (c as HTMLElement).style.padding = "6px 8px";
  });
});

document.body.appendChild(table);