import userRepository from "../Repository/userRepository.js";
import { verifyToken } from "../utils/authUtils.js";

export const isAuthenticated = async function (req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Token is required'
        });
    }
    console.log("Token received:", token);
    try {
        const decoded = await verifyToken(token);
        console.log("Decoded token:", decoded);

        if (!decoded?.id) {
            return res.status(400).json({
                success: false,
                message: 'Invalid auth token'
            });
        }

        // Get user using TypeORM repository
        const user = await userRepository.getUserById(decoded.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        req.user = user; // Attach full user object for further middleware
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};

export const isAdmin = async function (req, res, next) {
  if(req.user.role !== "Admin"){
    return res.status(403).json({
        success: false,
        message: 'Unautorized'
    });
  }  
  next();
};

export const isManager = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== 'Manager') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Only managers can perform this action.'
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
