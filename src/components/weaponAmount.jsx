import React from "react";

function WeaponAmount(props) {
  function handleChange(value) {
    props.setWeaponAmount(value.target.value);
  }

  return (
    <div className="field">
      <label for="">Quantidade de {props.weaponType || "Armas"}</label>
      <input
        class="form-control"
        type="number"
        id="weapons"
        onChange={handleChange}
        value={props.weaponAmount}
      />
    </div>
  );
}

export default WeaponAmount;
