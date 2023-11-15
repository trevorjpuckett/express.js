import path from 'path'
import url from 'url'

export const SRC_DIR_PATH = path.join(path.dirname(url.fileURLToPath(import.meta.url)),'..');

export function app_path(...subpath){
    return path.join(SRC_DIR_PATH, ...subpath)
}

export function view(filepath){
    return app_path('views',filepath)
}