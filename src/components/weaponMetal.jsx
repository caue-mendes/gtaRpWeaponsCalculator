import React, { useEffect, useState } from "react";
import WeaponsName from "./weaponsName";

function WeaponMetal(props) {
  const [weaponMetal, setWeaponMetal] = useState();

  function getValue() {
    if (!props.weaponType) return;
    const weapon = WeaponsName.find(function (e) {
      return e.name == props.weaponType;
    });
    setWeaponMetal(Number(weapon.metal));
  }
  useEffect(() => {
    getValue();
  }, [props.weaponType]);
  return (
    <div className="field">
      <label for="">Quantidade De Metal:</label>
      <input
        id="qMetal"
        class="form-control"
        disabled
        value={weaponMetal * props.weaponAmount}
      ></input>
    </div>
  );
}

export default WeaponMetal;
