// Define the Student interface
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const studentA: Student = {
    firstName: 'King',
    lastName: 'Chukwudi',
    age: 10,
    location: 'Canada, California, Washington',
  };
  
  const studentB: Student = {
    firstName: 'Ada',
    lastName: 'Chukwudi',
    age: 6,
    location: 'Canada, London, New Jersey',
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Student[] = [studentA, studentB];
  
  // Function to create a table row
  function createTableRow(student: Student): HTMLTableRowElement {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location.split(',')[0]; // Assuming you want only the first location
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    return row;
  }
  
  // Function to render the table
  function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    students.forEach((student) => {
      const row = createTableRow(student);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  // Render the table after the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    try {
      renderTable(studentsList);
    } catch (error) {
      console.error('Error rendering table:', error);
    }
  });  