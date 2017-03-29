var content_dir = 'view/content/';

var app = angular.module('app', []);
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/people/:personId', {
		templateUrl : content_dir + 'people/person.html',
		controller : PeopleCtrl
	}).when('/photo', {
		templateUrl : content_dir + 'photo.html',
		controller : PeopleCtrl
	}).when('/news/details/:newsId', {
		templateUrl : content_dir + 'news/details.html',
		controller : NewsCtrl
	}).when('/team', {
		templateUrl : content_dir + 'people/team.html',
	}).when('/lab/equipments', {
		templateUrl : content_dir + 'lab/equipments.html',
	}).when('/lab/installations', {
		templateUrl : content_dir + 'lab/installations.html',
	}).when('/research/projects', {
		templateUrl : content_dir + 'research/projects.html',
	}).when('/research/areas', {
		templateUrl : content_dir + 'research/areas.html',
	}).when('/research/publications', {
		templateUrl : content_dir + 'research/publications.html',
	}).when('/resources', {
		templateUrl : content_dir + 'resources/resources.html',
	}).when('/contact', {
		templateUrl : content_dir + 'contact.html',
	}).when('/about', {
		templateUrl : content_dir + 'about.html',
	}).when('/links', {
		templateUrl : content_dir + 'links.html',
	}).when('/news', {
		templateUrl : content_dir + 'news/news.html',
	}).when('/', {
		templateUrl : content_dir + 'main.html',
	}).otherwise({
		redirectTo : '/'
	});
} ]);

app.filter('range', function() {
	return function(input, min, max) {
		max = parseInt(max);
		for ( var i = min; i < max; i++) {
			input.push(i);
		}
		return input;
	};
});