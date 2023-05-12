import bcrypt from "bcryptjs";

const HASH_SALT = Number(process.env.HASH_SALT) || 10;

export const generatePasswordHash = async (password) => {
    return await bcrypt.hash(password, HASH_SALT);
};

export const comparePasswordHash = async (hash, password) => {
    return await bcrypt.compare(password, hash);
};
