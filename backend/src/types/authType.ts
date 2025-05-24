export interface LoginBody {
    email: string,
    password: string
};

export interface RegisterBody {
    owner_name: string;
    cnpj: string;
    email: string;
    password: string;
    enterprise_name: string
}