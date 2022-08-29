import React, { useEffect, useState } from "react";
import WeaponsName from "./weaponsName";

function Avatar(props) {
  const [avatar, setAvatar] = useState();

  function getValue() {
    if (!props.weaponType) return;
    const weapon = WeaponsName.find(function (e) {
      return e.name == props.weaponType;
    });
    setAvatar(weapon.img);
  }
  useEffect(() => {
    getValue();
  }, [props.weaponType]);

  return (
    <div className="">
      <img
        className=""
        src={avatar}
        alt=""
        style={{ width: 100, height: 100 }}
      />
    </div>
  );
}

export default Avatar;
