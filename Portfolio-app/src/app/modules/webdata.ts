export interface Webdata {
    _id: {'$oid': string};
    title: string;
    message?: string;
    cvurl?: string;
    email?: string;
    phone?: string;
}

