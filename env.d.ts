declare global{
    namespace NodeJS{
        interface ProcessEnv{
            USER_TOKEN:string;
            ADMIN_TOKEN:string;
            ENDPOINT_API:string;
        }
    }
}
export {}