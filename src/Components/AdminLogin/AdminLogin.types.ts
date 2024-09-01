export interface AdminLoginProps {
    login: string;
    setLogin: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    isButtonDisabled: boolean;
}
