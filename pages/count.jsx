import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../services/actions/counterAction";
import style from "../styles/Home.module.css";
const count = ({ count, increment, decrement }) => {
  return (
    <div className={style.main}>
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => increment(6)}>Increment</button>
        <button onClick={() => decrement(4)}>Decrement</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counterReducer.count,
});

export default connect(mapStateToProps, { increment, decrement })(count);
