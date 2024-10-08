import { Request } from "express";
import { Document } from "mongoose";

export interface AuthRequest extends Request {
  user: { id: string; email: string };
}

export type User = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  picture: string;
  verifyOTP: string;
  isOAuthUser: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: string;
};

export type Student = {
  user_id: Document["_id"];
  dateOfBirth: String;
  gender: string;
  college: string;
  yearOfEnding: string;
  course: string;
  interests: string[];
  bio: string;
  aim: string;
  plan: string;
  profilePicture: string;
  socialLinks: String[];
};

/** Response type which contains basic user details and the role specific details */
export interface UserResponse extends User {
  id?: Document["id"];
  student?: Student;
}
