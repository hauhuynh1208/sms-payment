import axios from 'axios';
import { URL } from '../utils/config';

export async function get(url, params) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }
    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    if (params.token) {
      headers.Authorization = params.token;
    }

    const data = params.body;
    let _params = {
      method: 'get',
      url: `${URL}/${url}`,
      headers,
      withCredentials: true,
      data,
    };

    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

export async function post(url, params) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }

    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    if (params.token) {
      headers.Authorization = params.token;
    }

    const data = params.body;
    let _params = {
      method: 'post',
      url: `${URL}/${url}`,
      headers,
      withCredentials: true,
      data,
    };

    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

export async function put(url, params) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }

    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    if (params.token) {
      headers.Authorization = params.token;
    }

    const data = params.body;
    let _params = {
      method: 'put',
      url: `${URL}/${url}`,
      headers,
      withCredentials: true,
      data,
    };

    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

export async function _delete(url, params) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }

    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    if (params.token) {
      headers.Authorization = params.token;
    }

    const data = params.body;
    let _params = {
      method: 'delete',
      url: `${URL}/${url}`,
      headers,
      withCredentials: true,
      data,
    };
    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

/* TEST FUNCTION */

// async function _results(params) {
//   await axios(params)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error.response);
//     });
// }

async function _results(params) {
  try {
    const resp = await axios(params);
    if (resp.status == 200 || resp.status == 201) {
      if (resp.data.error) throw resp.data.message;
      return resp.data;
    }
    throw new Error(`${resp.statusText}`);
  } catch (error) {
    throw error;
  }
}
