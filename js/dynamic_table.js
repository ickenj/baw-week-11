// Declare counter variable
var counter = 0;
// Add contact function adds new table rows
function addContact() {
	
	// Get input from the user
	var inputName = document.getElementById('name').value;	
	var inputEmail = document.getElementById('email').value;
	var inputPhone = document.getElementById('phone').value;
	
	// Create new HTML row elements
	var idRow = document.createElement("td");
	var nameRow = document.createElement("td");
	var emailRow = document.createElement("td");
	var phoneRow = document.createElement("tr");
	var removeButtonRow = document.createElement("td");
	
	// Set row value
	idRow.innerHTML = counter+1;
	
	// Set input values
	nameRow.innerHTML = inputName;
	emailRow.innerHTML = inputEmail;
	phoneRow.innerHTML = inputPhone;
	
	// Set remove button
	removeButtonRow.innerHTML = 
		'<button onclick = "removeContact(this.parentNode.parentNode.rowIndex);">Delete</button>';
	// Add table cells to the table row
	contactRow.appendChild(idRow);
	contactRow.appendChild(nameRow);
	contactRow.appendChild(emailRow);
	contactRow.appendChild(phoneRow);
	contactRow.appendChild(removeButtonRow);
	
	// Add table row to the table
	document.getElementById('contacts').appendChild(contactRow);
	
	// Increment counter
	counter++;
	
}// end add contact function

// Remove contact function removes existing table rows
function removeContact() {
	document.getElementById('contacts').deleteRow(i);
}// end delete contact function