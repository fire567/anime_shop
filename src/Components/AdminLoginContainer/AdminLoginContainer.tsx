import { FC, useEffect, useState } from "react";
import { AdminLogin } from "../AdminLogin/AdminLogin";
import { adminLoginContainerWrapper } from "./AdminLoginContainer.styles";
import { AdminLoginContainerProps } from "./AdminLoginContainer.types";

export const AdminLoginContainer: FC<AdminLoginContainerProps> = () => {
    return (
        <div className={adminLoginContainerWrapper}>
            <AdminLogin />
        </div>
    );
};
