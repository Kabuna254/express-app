exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.user.id; // assuming you're using authentication middleware
    await User.findByIdAndDelete(userId);
    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    next(error);
  }
};
