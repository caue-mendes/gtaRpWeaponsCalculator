import React, { useState } from "react";
import WeaponType from "./components/weaponType";
import WeaponAmount from "./components/weaponAmount";
import WeaponParts from "./components/weaponParts";
import WeaponMetal from "./components/weaponMetal";
import WeaponTrigger from "./components/weaponTrigger";
import WeaponSpring from "./components/weaponSpring";

function App() {
  const [weaponType, setWeaponType] = useState("Ak47");
  const [weaponAmount, setWeaponAmount] = useState(1);

  return (
    <div className="App">
      <h1 className="heading text-uppercase">
        Mafia Weapon <br /> Farm CALCULATOR
      </h1>
      <WeaponType setWeaponType={setWeaponType} weaponType={weaponType} />
      <WeaponAmount
        weaponType={weaponType}
        setWeaponAmount={setWeaponAmount}
        weaponAmount={weaponAmount}
      />
      <WeaponParts weaponType={weaponType} weaponAmount={weaponAmount} />
      <WeaponMetal weaponType={weaponType} weaponAmount={weaponAmount} />
      <WeaponTrigger weaponType={weaponType} weaponAmount={weaponAmount} />
      <WeaponSpring weaponType={weaponType} weaponAmount={weaponAmount} />
      <img
        className="footer"
        src="https://www.seekpng.com/png/full/440-4405738_gangster-silhouette-png-white-mafia.png"
      />
    </div>
  );
}

export default App;
