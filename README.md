# ionic-angular-course

created with:
* nom install -g ionic
* ionic start
* gave ioni-angular-course as name
* chose blank template
* yes to Angular
* yes to Capacitor
* no to Ionic Account
* no to Ionic Appflow

Runnable with:
* npm install (if needed)
* ionic serve (or ng serve)

Created recipes app with:
* ionic generate page recipes

Created recipe-detail app with:
* ionic generate page recipes/recipe-detail


Added Android by (make sure to have Android studio installed):
(stop ionic serve)
* ng build
* ionic capacitor add android
* open the capacitor.config.json file and modify the appId property.
* ionic capacitor copy android
* ionic capacitor run android
* (if some of this steps are throwing an ng build error => try to reload your IDE)