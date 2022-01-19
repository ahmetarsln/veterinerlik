import { Form } from "react-bootstrap";
const InputComponent = ({ field, form, type, name, id, display, ...props }) => {
  const isValid = !form.errors[field.name];
  const isInvalid = form.touched[field.name] && !isValid;
  return (
    <Form.Group>
      <Form.Label>{display}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        id={id}
        placeholder={display}
        isValid={form.touched[field.name] && isValid}
        isInvalid={isInvalid}
        feedback={form.errors[field.name]}
        {...field}
        {...props}
      />
      <Form.Control.Feedback type="invalid">
        {form.errors[field.name]}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
export default InputComponent;
