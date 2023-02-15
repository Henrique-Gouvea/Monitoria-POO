const generateAleatoryNumber1to10 = () => Math.floor(Math.random() * 10 + 1);

const damageLogic = (damage: number, lifePoints: number): number => {
  if (damage > 0) {
    const newLife = lifePoints - damage;
    if (newLife <= 0) {
      return -1;
    }
    return newLife;
  }
  return lifePoints;
};

export default { generateAleatoryNumber1to10, damageLogic };
