import http from 'k6/http';
import { check } from 'k6';

export const options = {
  duration: '30s',
  vus: 10,
};

export default function () {
  const url = 'http://localhost:8081/request-registration';
    const email = 'test' + Math.floor(Math.random() * 10001) + '@example.com'
    const payload = JSON.stringify({
        email: email,
    });


  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 204': (r) => r.status === 204,
  });
}

//export function handleSummary(data) {
//  return {
//    'summary.json': JSON.stringify(data), //the default data object
//  };
//}