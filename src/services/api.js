import _ from 'lodash';

const URL = 'http://localhost:3004';

/**
 * Service allows create REST api client based on resource URL
 */
export class ApiCreator {
  constructor() {
    this.rootUrl = URL;
  }

  /**
   * To get resource
   * Usage:
   *     apiCreator.get('/films/:id')({id: 777})
   *     -
   *     -> makes HTTP request
   *     -> host:port/films/777
   *
   *     apiCreator.get('/films')({
   *         genres_like: 'Comedy',
   *         year_gte: 1920,
   *         year_lte: 1980
   *     })
   *     -
   *     -> makes HTTP request
   *     host:port/films?genres_like=Comedy&year_gte=1920&year_lte=1980
   *
   * @param {String} url - resource url
   * @returns {function(*=): Promise<any | never>}
   */
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
    const result = Object.entries(params)
      .filter(item => Boolean(item[1]))
      .map(item => {
        const [key, value] = item;

        return value ? `${key}=${value}`: '';
      })
      .join('&');

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
