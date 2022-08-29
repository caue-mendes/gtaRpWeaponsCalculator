import React, { useEffect, useState } from "react";
import WeaponsName from "./weaponsName";

function WeaponParts(props) {
  const [weaponParts, setWeaponParts] = useState();

  function getValue() {
    if (!props.weaponType) return;
    const weapon = WeaponsName.find(function (e) {
      return e.name == props.weaponType;
    });
    setWeaponParts(Number(weapon.pecas));
  }
  useEffect(() => {
    getValue();
  }, [props.weaponType]);
  return (
    <div className="field">
      <label for="">Quantidade De Peças:</label>
      <input
        id="qPecas"
        class="form-control"
        disabled
        value={weaponParts * props.weaponAmount}
      ></input>
    </div>
  );
}

export default WeaponParts;
