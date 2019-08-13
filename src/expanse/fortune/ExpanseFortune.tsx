import { connect } from "react-redux";
import { setExpanseRoll } from "../../actions";
import ExpanseFortuneForm from "./ExpanseFortuneForm";
import { number } from "prop-types";
import { sendToDiscord } from "../../services/discord";
import { Dice } from "dice-typescript";

const mapStateToProps = (state: any) => {
  return {
    name: state.expanse.name ? state.expanse.name : "",
    roll: state.expanse.roll ? state.expanse.roll : 0,
    dice: state.expanse.dice ? state.expanse.dice : [],
    modifier: state.expanse.modifier ? state.expanse.modifier : 0,
    target: state.expanse.target ? state.expanse.target : 0,
    currentFortune: state.expanse.currentFortune
      ? state.expanse.currentFortune
      : 0,
    maxFortune: state.expanse.maxFortune ? state.expanse.maxFortune : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (name: string, currentFortune: number) => {
    // if (!name.trim()) {
    //   return;
    // }
    // const dice = new Dice();
    // const result = dice.roll("3d6");
    // // kinda pointless to use dice-typescript at this point...
    // const rawResults = (result.reducedExpression as any).children.map(
    //   (res: any) => res.attributes.value
    // );
    // const resultSet = new Set(rawResults);
    // let bonus = Number.parseInt(`${modifier}`, 10);
    // if (isNaN(bonus)) {
    //   bonus = 0;
    // }
    // let status = "FAIL";
    // if (result.total + bonus >= target) {
    //   status = "SUCCESS";
    // }
    // const sign = bonus < 0 ? " - " : " + ";
    // const msg = `${status} ([${rawResults.join(", ")}]${sign}${Math.abs(
    //   bonus
    // )} vs ${target}) Rolled a ${result.total + bonus}${
    //   description.trim().length > 0 ? " for " + description.trim() : ""
    // }${
    //   resultSet.size <= 2
    //     ? ". " + rawResults[2] + " stunt points available"
    //     : ""
    // }`;
    // let sp = 0;
    // if (resultSet.size <= 2) {
    //   sp = rawResults[2];
    // }
    // console.log(msg);
    // dispatch(
    //   setExpanseRoll(
    //     result.total,
    //     rawResults,
    //     modifier,
    //     target,
    //     sp,
    //     description,
    //     msg
    //   )
    // );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseFortuneForm);
