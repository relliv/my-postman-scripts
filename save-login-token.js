const response = pm.response.json();

if (response.access_token) {
  pm.environment.set("bearerToken", response.access_token);
}
