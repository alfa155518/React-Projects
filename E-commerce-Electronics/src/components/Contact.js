import { useState } from "react";

const Contact = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    sub: "",
    message: "",
  });

  const handel = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { name, email, sub, message } = form;
  const sendData = async (e) => {
    e.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        sub,
        message,
      }),
    };
    const send = await fetch(
      "https://e-commerce-shop-contact-default-rtdb.firebaseio.com/Message.json",
      option
    );

    if (send) {
      alert("data Send");
    } else {
      alert("failed");
    }
  };

  return (
    <div className="container">
      <div className="contact">
        <h3># Contact Us</h3>
        <form method="POST">
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            onInput={(e) => handel(e)}
            name="name"
            placeholder="Name"
          />
          {name === "" && <p>Write Yor Name</p>}
          <label>E-mail</label>
          <input
            type="email"
            value={form.email}
            onInput={(e) => handel(e)}
            name="email"
            placeholder="E-mail"
          />
          {email === "" && <p>Write Yor Email</p>}
          <label>Subject</label>
          <input
            type="text"
            value={form.sub}
            onInput={(e) => handel(e)}
            name="sub"
            placeholder="Subject"
          />
          {sub === "" && <p>Write Yor Name</p>}
          <label>Message</label>
          <input
            type="textarea"
            value={form.message}
            onInput={(e) => handel(e)}
            name="message"
            placeholder="Message"
          />
          {message === "" && <p>Write Yor Name</p>}
          <button className="btn" type="submit" onClick={(e) => sendData(e)}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
