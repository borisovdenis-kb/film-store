import _ from 'lodash';

const URL = 'http://localhost:3004';

/**
 * Service allows create REST api client based on resource URL
 */
export class ApiCreator {
  constructor() {
    this.rootUrl = URL;
  }

  get(url) {
    return (params) => {
      url = this.getUrlPreparedUrl(url, params);

      return fetch(url)
        .then(response => response.json());
    };
  }

  getUrlPreparedUrl(url, params) {
    let resultUrl = this.setUrlParams(url, params);
    params = _.omit(params, this.getUrlParamNames(url));

    resultUrl = this.setUrlQuery(resultUrl, params);

    return `${this.rootUrl}${resultUrl}`;
  }

  setUrlQuery(url, params) {
    const result = Object.entries(params).map(item => {
      return `${item[0]}=${item[1]}`;
    }).join('&');

    return `${url}${result && '?' + result}`;
  }

  setUrlParams(url, params) {
    const tokens = url.split('/');

    return tokens.map(item => {
      if (item.charAt(0) === ':') {
        const paramName = item.slice(1, item.length);

        return params[paramName];
      }

      return item;
    }).join('/');
  }

  getUrlParamNames(url) {
    const tokens = url.split('/');

    return tokens
      .filter(item => item.charAt(0) === ':')
      .map(item => item.slice(1, item.length));
  }
}
