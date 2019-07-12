/* eslint-disable quotes */
// eslint-disable-next-line import/prefer-default-export
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */

import users from '../../model/usersmodel';

// create user controller

export const createUser = (req, res) => {
  const { body } = req;
  users.push[body];
  return res.status(201).json({
    status: "success",
    data: body,
  });
};
