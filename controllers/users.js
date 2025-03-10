import User from "../models/User.js"; // Import User model

// Get all users
export const getAllUsers = async (req, res) => {
try {
    const users = await User.findAll({ attributes: ["id", "name", "email"] });
    res.json(users);
} catch (error) {
    res.status(500).json({ error: "Internal server error" });
}
};

// Create a new user
export const createUser = async (req, res) => {
try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ id: user.id, name, email });
} catch (error) {
    res.status(400).json({ error: "Email must be unique or invalid data" });
}
};

// Get user by ID
export const getUserById = async (req, res) => {
try {
    const user = await User.findByPk(req.params.id, { attributes: ["id", "name", "email"] });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
} catch (error) {
    res.status(500).json({ error: "Internal server error" });
}
};

// Update user by ID
export const updateUser = async (req, res) => {
try {
    const { name, email, password } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.update({ name, email, password });
    res.json({ id: user.id, name, email });
} catch (error) {
    res.status(400).json({ error: "Email must be unique or invalid data" });
}
};

// Delete user by ID
export const deleteUser = async (req, res) => {
try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.destroy();
    res.json({ message: "User deleted successfully" });
} catch (error) {
    res.status(500).json({ error: "Internal server error" });
}
}