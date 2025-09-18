function loadContacts() {
  const contacts = JSON.parse(localStorage.getItem('codenova_contacts') || '[]');
  const tableBody = document.querySelector('#contactsTable tbody');
  tableBody.innerHTML = '';

  if (contacts.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:gray;">No messages found</td></tr>';
    return;
  }

  contacts.forEach(c => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${c.name || '-'}</td>
      <td>${c.email || '-'}</td>
      <td>${c.company || '-'}</td>
      <td>${c.service || '-'}</td>
      <td>${c.message || '-'}</td>
      <td>${new Date(c.timestamp).toLocaleString()}</td>
    `;
    tableBody.appendChild(row);
  });
}

function clearMessages() {
  if (confirm('Are you sure you want to delete all messages?')) {
    localStorage.removeItem('codenova_contacts');
    loadContacts();
  }
}

// Load on page start
loadContacts();