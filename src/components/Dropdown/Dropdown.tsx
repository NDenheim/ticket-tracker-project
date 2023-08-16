import { FormEventHandler } from "react";
import "./Dropdown.scss";

type Dropdown = {
  handleFilterByRole: FormEventHandler<HTMLSelectElement>;
};

const DropdownBox = ({ handleFilterByRole }: Dropdown) => {
  return (
    <div className="dropdown">
      <label htmlFor="role"> Search by role: </label>

      <select name="role" id="dropdown-menu" onChange={handleFilterByRole}>
        <option value="">Choose a role</option>
        <option value="Junior Software Developer">
          Junior Software Developer
        </option>
        <option value="Software Developer">Software Developer</option>
        <option value="Senior Software Developer">
          Senior Software Developer
        </option>
        <option value="Project Manager">Project Manager</option>
        <option value="Tester">Tester</option>
        <option value="Hard Man">Hard Man</option>
      </select>
    </div>
  );
};

export default DropdownBox;
