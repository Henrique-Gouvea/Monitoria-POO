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

const verifyTypeDamage = (
  typeAttacker: string,
  typeDamage: Array<string>
): number => {
  const verifyDamage = typeDamage.some((type) => type === typeAttacker);
  return verifyDamage ? 3 : 0;
};

export default { generateAleatoryNumber1to10, damageLogic, verifyTypeDamage };
