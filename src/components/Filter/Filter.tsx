import { FormEventHandler } from "react";
import "./Filter.scss";

type Filter = {
  handleFilterByName: FormEventHandler<HTMLInputElement>;
};

const FilterBar = ({ handleFilterByName }: Filter) => {
  return (
    <div className="filter">
      <label htmlFor="name"> Search by name: </label>
      <input type="text" onInput={handleFilterByName} />
    </div>
  );
};

export default FilterBar;
