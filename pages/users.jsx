import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usersList } from "../services/actions/userAction";
import style from "../styles/Home.module.css";
const users = ({ usersList, loading, users, error }) => {
  useEffect(() => {
    usersList();
  }, []);
  return (
    <div className={style.main}>
      <div>
        <h3>Users List:</h3>
        {loading ? (
          <h3>Loading... </h3>
        ) : error ? (
          <h3>error</h3>
        ) : (
          <div>
            {users.map((user) => {
              return <h3>Title: {user.title}</h3>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  error: state.userReducer.error,
});
export default connect(mapStateToProps, { usersList })(users);
