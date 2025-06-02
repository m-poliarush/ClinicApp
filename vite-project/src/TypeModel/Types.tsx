export type LoginRequestProps = {
    email: string;
    password: string;
}

export type LoginResponse={
    id: string;
    name: string;
    role: "user" | "admin" | "manager";
    token: string;
}