import React, { useEffect, useState } from "react";
import WeaponsName from "./weaponsName";

function WeaponSpring(props) {
  const [weaponSpring, setWeaponSpring] = useState();

  function getValue() {
    if (!props.weaponType) return;
    const weapon = WeaponsName.find(function (e) {
      return e.name == props.weaponType;
    });
    setWeaponSpring(Number(weapon.molas));
  }
  useEffect(() => {
    getValue();
  }, [props.weaponType]);

  return (
    <div className="field">
      <label for="">Quantidade De Molas:</label>
      <input
        id="qMolas"
        class="form-control"
        disabled
        value={weaponSpring * props.weaponAmount}
      ></input>
    </div>
  );
}

export default WeaponSpring;
