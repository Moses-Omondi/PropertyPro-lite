/* eslint-disable semi */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable one-var */
/* eslint-disable linebreak-style */
import users from "../model/usersmodel";
export const getAllUsers = (req, res) => res.json(users);

export const getUserById = (req, res) => {

    const user = users.find((users) => users.id == req.params.id);

    return res.json(user);

};

export const createUser = (req, res) => {
    const { body } = req;
    users.push[body];
    return res.status(201).json({
      status: "success",
      data: body,
    });
  };
