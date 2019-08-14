import { connect } from "react-redux";
import { setExpanseSpent } from "../../actions";
import ExpanseFortuneForm from "./ExpanseFortuneForm";

const mapStateToProps = (state: any) => {
  return {
    name: state.expanse.name ? state.expanse.name : "",
    roll: state.expanse.roll ? state.expanse.roll : 0,
    dice: state.expanse.dice ? state.expanse.dice : [1, 1, 1],
    modifier: state.expanse.modifier ? state.expanse.modifier : 0,
    target: state.expanse.target ? state.expanse.target : 0,
    currentFortune: state.expanse.currentFortune
      ? state.expanse.currentFortune
      : 0,
    maxFortune: state.expanse.maxFortune ? state.expanse.maxFortune : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (
    name: string,
    modifier: number,
    target: number,
    newDice: number[],
    spendTotal: number,
    currentFortune: number,
    maxFortune: number,
    stuntPoints: number
  ) => {
    if (!name.trim()) {
      return;
    }
    let total = 0;
    newDice.forEach(roll => {
      total += roll;
    });

    const sign = Number.parseInt(`${modifier}`, 10) < 0 ? " - " : " + ";

    const msg = `${name} spent ${spendTotal} fortune to bring the roll total to [${newDice.join(
      ", "
    )}] ${sign} ${Math.abs(modifier)} = ${total +
      Number.parseInt(
        `${modifier}`,
        10
      )} vs ${target}.  Current Fortune: ${currentFortune -
      spendTotal} / ${maxFortune}${
      stuntPoints > 0 ? ". " + stuntPoints + " stunt points available" : ""
    }`;

    console.log(msg);
    dispatch(
      setExpanseSpent(
        total + Number.parseInt(`${modifier}`, 10),
        newDice,
        stuntPoints,
        currentFortune - spendTotal,
        msg
      )
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseFortuneForm);
