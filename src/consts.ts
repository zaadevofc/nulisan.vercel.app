import { url } from "../utils/tools";

export const SITE_TITLE = 'Nulisan | Bot Nulis Online berbasis Website';
export const SITE_DESCRIPTION = 'Nulisan | Bot Nulis Online berbasis Website';
export const SITE_IMAGE = url('/nulisan.png').href;

export const SITE_DOMAIN = 'nulisan.vercel.app';
export const SITE_URL = url().href;

export const rahasia = [
    '/(.*)'
]

export const SET_HEADERS = {
    'Cache-Control': 'max-age=604800'
}