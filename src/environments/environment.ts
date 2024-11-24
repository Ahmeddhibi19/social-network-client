export const environment = {
  production: false,
  apiUrl: 'http://springboot-service:8080/api/v1', // Use the service name defined in Kubernetes
  defaultProfilePhotoUrl: '/assets/images/avatar.jpg', // Use relative paths for assets
  defaultCoverPhotoUrl: '/assets/images/cover.jpg',   // Use relative paths for assets
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
