const form = document.querySelector('.contato form');
const phoneInput = document.querySelector('.contato .input-group-text:nth-child(3) + input[type="tel"]');
const messageInput = document.querySelector('.contato textarea[name="message"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters from phone number
  const message = messageInput.value;

  // Concatenate phone number and message
  const updatedMessage = `${message} \n\nTelefone: ${phoneNumber}`;

  // Update the message field with the concatenated value
  messageInput.value = updatedMessage;

  // Submit the form with the updated message
  form.submit();
});