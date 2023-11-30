import TwitterApi from 'twitter-api-v2';

const consumerClient = new TwitterApi({ appKey: '0XG5299e6oSESyHvLGIMGmwW3', appSecret: "kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW" });

const client = await consumerClient.appLogin();

// const client = new TwitterApi({
//     appKey: "0XG5299e6oSESyHvLGIMGmwW3",
//     appSecret: "kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW",
//     accessToken: "3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h", // oauth token from previous step (link generation)
//     accessSecret: "TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl", // oauth token secret from previous step (link generation)
// });

export default client;