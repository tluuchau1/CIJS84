import RadioInput from './Components/RadioInput.js';
import InputCustom from './Components/CustomInput.js';
import Select from './Components/Select.js';
import "./Components/Style.css"
import TextArea from './Components/TextArea.js';
import Button from './Components/Button.js';
import InputCustomM from './Components/InputCustom.js';


const dataRadio = [{label: "Male"}, {label: "Female"}, {label: "Other"}];
const dataOption = [{name: "JavaScript"}, {name: "Css"}, {name: "Html"}, {name: "ReactJs"}]



function App() {
  return (
    <div className="container">
      <h1>Student Registeration Form</h1>
      
    <form className="form-group">
      {/* <InputCustom type = "text" placeholder = "Fristname"  className="form__input--first-name" title = "Firstname: "/> */}
      <InputCustomM label="FirstName" />
      {/* <InputCustom type = "text" placeholder = "Middlename" className="form__input--middle-name"  title = "Middlename: "/> */}
      <InputCustomM label="MiddleName" />
      {/* <InputCustom type = "text" placeholder = "Lastname"  className="form__input--last-name" title = "LastName: "/> */}
      <InputCustomM label="LastName" />

      <Select title="Course: " dataOption={dataOption} />
      <RadioInput title="Gender" name="Sex" dataRadio={dataRadio} />
      <InputCustom type = "tel" placeholder="Phone no" className="form__input-phone" title="Phone: " />
      <TextArea title="Current Address :" placeholder="Current Address :"/>
      <InputCustom type = "email" placeholder="Enter Email" title="Email" className="form__input-email"/>
      <InputCustom type = "password" placeholder="Enter Password" title="Password" className="form__input-password" />
      <InputCustom type = "password" placeholder="Re-type Password" title="Re-type Password" className="form__input-re-password" />
      <Button type="submit" namebutton="Regiser" />
    </form>
    </div>
  );
}

export default App;
