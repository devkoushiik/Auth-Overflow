const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController');
// ==============================================================================
// router
//   .route('/')
//   .get( getAllUsers);

// router.route('/showMe').get( showCurrentUser);
// router.route('/updateUser').patch( updateUser);
// router.route('/updateUserPassword').patch( updateUserPassword);
// router.route('/:id').get(getSingleUser);

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin'), getAllUsers);

router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUser').patch(authenticateUser, updateUser);
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);

router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;
