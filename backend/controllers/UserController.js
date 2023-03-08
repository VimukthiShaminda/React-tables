const User = require('../models/User');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};

exports.updateUserStatus = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: req.body.isActive },
      { new: true }
    );
    res.json(user);
  } catch (err) { 
    console.log(err);
    res.status(500).send('Server error');
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // Get the user data from the request body
    const userData = req.body;

    // Create a new user with the user data
    const user = new User(userData);

    // Save the user to the database
    await user.save();

    // Return the new user as a response
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'create Server error' });
  }
};
