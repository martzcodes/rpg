import { connect } from "react-redux";
import { setExpanseCharacter, setExpanseRoll } from "../../actions";
import ExpanseStatRollForm from "./ExpanseStatRollForm";
import ICharacterStats from "../ICharacterStats";
import { Dice } from "dice-typescript";

const mapStateToProps = (state: any) => {
  return {
    name: state.expanse.name ? state.expanse.name : "",
    accuracy: state.expanse.accuracy ? state.expanse.accuracy : 0,
    communication: state.expanse.communication
      ? state.expanse.communication
      : 0,
    constitution: state.expanse.constitution ? state.expanse.constitution : 0,
    dexterity: state.expanse.dexterity ? state.expanse.dexterity : 0,
    fighting: state.expanse.fighting ? state.expanse.fighting : 0,
    intelligence: state.expanse.intelligence ? state.expanse.intelligence : 0,
    perception: state.expanse.perception ? state.expanse.perception : 0,
    strength: state.expanse.strength ? state.expanse.strength : 0,
    willpower: state.expanse.willpower ? state.expanse.willpower : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (
    name: string,
    modifier: number,
    target: number,
    description: string
  ) => {
    if (!name.trim()) {
      return;
    }
    const dice = new Dice();
    const result = dice.roll("3d6");
    // kinda pointless to use dice-typescript at this point...
    const rawResults = (result.reducedExpression as any).children.map(
      (res: any) => res.attributes.value
    );
    const resultSet = new Set(rawResults);
    let bonus = Number.parseInt(`${modifier}`, 10);
    if (isNaN(bonus)) {
      bonus = 0;
    }
    let status = "FAIL";
    if (result.total + bonus >= target) {
      status = "SUCCESS";
    }
    const sign = bonus < 0 ? " - " : " + ";
    const msg = `${status} ([${rawResults.join(", ")}]${sign}${Math.abs(
      bonus
    )} vs ${target}) Rolled a ${result.total + bonus}${
      description.trim().length > 0 ? " for " + description.trim() : ""
    }${
      resultSet.size <= 2 && status === "SUCCESS"
        ? ". " + rawResults[2] + " stunt points available"
        : ""
    }`;
    let sp = 0;
    if (resultSet.size <= 2 && status === "SUCCESS") {
      sp = rawResults[2];
    }
    console.log(msg);

    dispatch(
      setExpanseRoll(
        result.total,
        rawResults,
        modifier,
        target,
        sp,
        description,
        msg
      )
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseStatRollForm);
