import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
 static propTypes = {
  submitNewContact: PropTypes.func.isRequired,
  findDuplicate: PropTypes.func.isRequired,
 };

 state = {
  name: "",
  number: "",
 };

 saveInputValueToState = (evt) => {
  this.setState({
   [evt.target.name]: evt.target.value,
  });
 };

 handleSubmitForm = (evt) => {
  evt.preventDefault();

  if (this.props.findDuplicate(this.state.name)) {
   this.props.submitNewContact(this.state);
   this.resetForm();
  }
 };

 resetForm = () => {
  this.setState({ name: "", number: "", id: "" });
 };

 render() {
  return (
   <>
    <form className={styles.mainForm} onSubmit={this.handleSubmitForm}>
     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Name</label>
      <input
       onChange={this.saveInputValueToState}
       type="text"
       name="name"
       className={styles.inputName}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
       placeholder="Enter Name"
      ></input>
     </div>

     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Number</label>
      <input
       onChange={this.saveInputValueToState}
       type="tel"
       name="number"
       className={styles.inputName}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
      />
     </div>
     <button type="submit" className={styles.buttonAddContact}>
      Add contact
     </button>
    </form>
   </>
  );
 }
}
export default ContactForm;
