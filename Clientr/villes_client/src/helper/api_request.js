import http from './http_ccommon';
const get_villes = (params) => {
  return http.get("/villes", { params });
}

const get_ville = (id) => {
  return http.get("/villes/"+ id);
}


export {
  get_villes,
  get_ville
}
