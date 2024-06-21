const soap = require('soap');

const url = 'https://webservices.netsuite.com/wsdl/v2020_1_0/netsuite.wsdl'; // Replace with your WSDL URL
const email = 'your_email@example.com'; // Replace with your NetSuite login email
const password = 'your_password'; // Replace with your NetSuite login password
const account = 'your_account'; // Replace with your NetSuite account ID

const mapAndCreateCustomer = async (externalCustomerData) => {
  try {
    const client = await soap.createClientAsync(url);

    // Set NetSuite authentication headers
    client.setSecurity(new soap.BasicAuthSecurity(email, password));
    client.addSoapHeader(`<platformMsgs:account xmlns:platformMsgs="urn:messages_2020_1.platform.webservices.netsuite.com">
      <platformMsgs:accountingContext>YOUR_ACCOUNTING_CONTEXT</platformMsgs:accountingContext>
      <platformMsgs:entityId>YOUR_ENTITY_ID</platformMsgs:entityId>
      <platformMsgs:role>YOUR_ROLE</platformMsgs:role>
    </platformMsgs:account>`);

    // Map external CRM data to NetSuite customer record fields
    const mappedCustomerData = {
      firstName: externalCustomerData.firstName,
      lastName: externalCustomerData.lastName,
      email: externalCustomerData.email,
      companyName: externalCustomerData.companyName,
      phone: externalCustomerData.phone,
      // Map other fields as needed
    };

    // Create the customer record in NetSuite
    const response = await client.addAsync({ record: mappedCustomerData, _soapheaders: { 'platformMsgs:account': { account } } });

    console.log('Customer created successfully:', response);
    return response;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

// Example external CRM customer data
const externalCustomerData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  companyName: 'ABC Inc.',
  phone: '1234567890'
  // Add other fields as needed
};

// Call the function to map and create the customer record
mapAndCreateCustomer(externalCustomerData);
