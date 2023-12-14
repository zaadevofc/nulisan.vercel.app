export const url = (path?: string) => {
    let check = process.env.NODE_ENV == 'production';
    let isDev = process.env.NEXT_PUBLIC_DEV_URL;
    let isProd = process.env.NEXT_PUBLIC_PROD_URL;
    return check ? new URL(path as string, isProd) : new URL(path as string, isDev);
}