import React from "react";

const Home = ({ getContacts }) => {
  const contacts = getContacts().map(contact => (
    <div>
      {contact.firstName} {contact.lastName}
    </div>
  ));
  return (
    <div id="homePage">
      Welcome To Your Contact List
      {contacts}
    </div>
  );
};

export default Home;
