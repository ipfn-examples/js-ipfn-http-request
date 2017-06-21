/**
 * @license
 * Copyright (c) 2017 Łukasz Kurowski <crackcomm@gmail.com>
 */

import axios from 'axios';

export interface Response {
  body: string;
  status: {
    code: number;
    text: string;
  };
  header: {
    [key: string]: string;
  };
}

export function get(url: string): Promise<Response> {
  return axios.get(url)
    .then(({ data, status, statusText, headers }) => ({
      body: data,
      status: {
        code: status,
        text: statusText,
      },
      header: headers,
    }));
}
