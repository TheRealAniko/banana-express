import express from "express";
import {
    validateUserCreation,
    validateUserUpdate,
} from "../middleware/somemiddleware.js";
import {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} from "../controllers/users.js";

const router = express.Router();

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", validateUserCreation, createUser);

// GET /users/{id}
router.get("/:id", getUserById);

// PUT /users/{id}
router.put("/:id", validateUserUpdate, updateUser);

// DELETE /users/{id}
router.delete("/:id", deleteUser);

export default router;