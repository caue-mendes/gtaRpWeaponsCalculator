import React, { useState } from "react";
import WeaponName from "./weaponsName";
import Avatar from "./avatar";

function WeaponType(props) {
  function handleChange(value) {
    props.setWeaponType(value.target.value);
  }

  return (
    <div className="field">
      <div className="row">
        <div className="col-6 p-0">
          <Avatar weaponType={props.weaponType} />
        </div>
        <div className="col-6">
          <label for="">Modelo Da Arma:</label>
          <select
            onChange={handleChange}
            class="form-control"
            name="weapon"
            id="typeWeapons"
            form="weaponform"
          >
            {WeaponName.map(function (e) {
              return <option value={e.name}>{e.name}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default WeaponType;
