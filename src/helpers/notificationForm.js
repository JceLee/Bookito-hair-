export const notificationForm = (designer, customer) => {
  return `
        <code>
            <h1>Hello, ${designer.fname}! You got an appointment request from ${customer.fname}!<h1>
            <a href="http://localhost:3000/loading?uid=${designer.uid}">Go to Appointment Manager</a>
        </code>
    `;
};
