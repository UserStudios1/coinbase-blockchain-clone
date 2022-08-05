import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'pfmpxg5k',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skpUPzhOkeW0YfGM2pVmfqVvz1YRgcdxPALdd6MH9tjZrvaN6YUkXKu1wjji7Pxi4DQG3wvTqmB88vUZBklSesXlAthquKfmjwCEbh4sBJiE29BWINUMhwwNbqsKu3WwB227ZqFms0szBaiITYRT2GLUSssnXjKxrMmgyBMGiwRNoSuuYI6Y',
    useCdn: false
});