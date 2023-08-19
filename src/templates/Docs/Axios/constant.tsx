import axios from 'axios';

export type RequestType = {
  type: string;
  value: {
    key: string;
    value?: string | number | boolean | RequestType[];
    valueType?: string;
  };
};

const getRequest = {
  method: 'GET',
  url: '/movies',
  baseURL: 'https://movie-api-production-6f96.up.railway.app',
  comment: '// All query parameters goes here.',
  params: {
    sort: 'year',
    featured: 1,
    comment: '// This is how to use [includes] query parameter.',
    includes: {
      title: 1,
      year: 1,
      featured: 1,
      cast: {
        asCharacter: 1,
      },
    },
    limit: 3,
  },
};

const getRequestForHomepage = {
  method: 'GET',
  url: '/movies/64a97ccf13119bd5b2081b93',
  baseURL: 'https://movie-api-production-6f96.up.railway.app',
  params: {
    includes: {
      title: 1,
      year: 1,
      rank: 1,
      genres: 1,
    },
  },
};

const postRequest = {
  method: 'POST',
  url: '/cinephile/sign-up',
  baseURL: 'https://movie-api-production-6f96.up.railway.app',
  data: {
    comment: '// username and email should be unique',
    username: 'Christian Stewart',
    email: 'christian@gmail.com',
    password: 'password123',
    verify: 'password123',
    likes: ['action', 'romance'],
    userImage:
      'https://firebasestorage.googleapis.com/v0/b/movies-5a33e.appspot.com/o/austin-wade-X6Uj51n5CE8-unsplash.jpg?alt=media&token=962f22c1-fb71-4e4a-8388-2bd1af2abdac',
  },
};

const HeaderSample = {
  method: 'POST',
  url: '/movies/reviews/movie_id_here',
  baseURL: 'https://movie-api-production-6f96.up.railway.app',
  data: {
    review:
      'Cray craft beer jawn tote bag sriracha pabst. Brunch four loko cronut sustainable, tumeric fashion axe ugh marfa portland literally dreamcatcher.',
  },
  headers: {
    comment: '// this is where you add you access_token.',
    Authorization: 'Bearer access_token_here',
  },
};

const SampleResponse = {
  rank: {
    isRanked: true,
    rankNumber: 1,
  },
  _id: '64a97ccf13119bd5b2081b93',
  title: 'GrandMaster in Town',
  year: 2012,
  image:
    'https://firebasestorage.googleapis.com/v0/b/movies-5a33e.appspot.com/o/randy-fath-G1yhU1Ej-9A-unsplash.jpg?alt=media&token=4b510b8e-474d-41f4-b4fa-7af786b7c45c',
  genres: ['comedy', 'action', 'sports'],
};

const objectMapper = (item) => {
  return Object.keys(item).map((child) => {
    if (typeof item[child] === 'object' && !Array.isArray(item[child])) {
      return {
        type: 'array',
        value: {
          key: child,
          value: objectMapper(item[child]),
        },
      };
    }
    if (typeof item[child] === 'string' && item[child].startsWith('//')) {
      return {
        type: 'comment',
        value: {
          key: item[child],
        },
      };
    }
    return {
      type: 'object-pair',
      value: {
        key: child,
        value: item[child],
        valueType: typeof item[child],
      },
    };
  });
};

export const SampleGetRequest = objectMapper(getRequest);
export const SampleCodeForHomepage = objectMapper(getRequestForHomepage);
export const SamplePostRequest = objectMapper(postRequest);
export const SampleGetResponse = objectMapper(SampleResponse);
export const SampleHeaderRequest = objectMapper(HeaderSample);

export const SampleCode = `
axios({
    method: "GET",
    url: "/movies",
    baseURL: "https://movie-api-production-6f96.up.railway.app",
    params: {
      sort: "year",
      featured: 1,
      includes: {
        title: 1,
        year: 1,
        featured: 1,
        cast: {
          asCharacter: 1,
        },
      },
      limit: 3,
    },
}).then((res) => console.log(res));
`;

export const SampleCode2 = `
axios({
  method: "POST",
  url: "/cinephile/sign-up",
  baseURL: "https://movie-api-production-6f96.up.railway.app",
  data: {
    username: "Chris Hemsworth",
    email: "chris@gmail.com",
    password: "password123",
    verify: "password123",
    likes: ["action","romance"],
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bookmark: [],
  }
}).then((res) => console.log(res));
`;

export const SampleCode3 = `
axios({
  method: "POST",
  url: "/movies/reviews/movie_id_here",
  baseURL: "https://movie-api-production-6f96.up.railway.app",
  data: {
    review: "Cray craft beer jawn tote bag sriracha pabst. Brunch four loko cronut sustainable, tumeric fashion axe ugh marfa portland literally dreamcatcher.",
  },
  headers: {
    Authorization: "Bearer access_token_here",
  }
  }).then((res) => console.log(res))
`;
