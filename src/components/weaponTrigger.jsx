import React, { useEffect, useState } from "react";
import WeaponsName from "./weaponsName";

function WeaponTrigger(props) {
  const [weaponTrigger, setWeaponTrigger] = useState();

  function getValue() {
    if (!props.weaponType) return;
    const weapon = WeaponsName.find(function (e) {
      return e.name == props.weaponType;
    });
    setWeaponTrigger(Number(weapon.gatilho));
  }
  useEffect(() => {
    getValue();
  }, [props.weaponType]);

  return (
    <div className="field">
      <label for="">Quantidade De Gatilhos:</label>
      <input
        id="qGatilho"
        class="form-control"
        disabled
        value={weaponTrigger * props.weaponAmount}
      ></input>
    </div>
  );
}

export default WeaponTrigger;
