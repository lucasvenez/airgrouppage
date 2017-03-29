function MainCtrl($scope) {
}

function NewsCtrl($scope, $http, $routeParams) {
	$scope.news = [];
	$scope.recent_news = [];

	getData($http, 'news', function(result) {
		var MAX_RECENT_NEWS = 3;
		var max = result.length < MAX_RECENT_NEWS ? result.length
				: MAX_RECENT_NEWS;
		var news = [];
		var recent_news = [];
		var i;

		for (i = 0; i < result.length; i++) {
			var notice = result[i];
			notice.date = new Date(notice.year, notice.month, 1);
			news[i] = notice;
		}

		news = news.sort(getDateSorter(true));

		for (i = 0; i < max; i++) {
			recent_news[i] = news[i];
		}

		$scope.news = news;
		$scope.recent_news = recent_news;

		if ($routeParams.newsId) {
			$scope.notice = getById($scope.news, $routeParams.newsId);
		}
	});
};

function PublicationsCtrl($scope, $http) {
	$scope.publications = [];

	getData($http, 'publications', function(result) {
		$scope.publications = result;
	});
};

function ResourcesCtrl($scope, $http) {
	$scope.resources = [];

	getData($http, 'resources', function(result) {
		$scope.resources = result;
	});
};

function EquipmentsCtrl($scope, $http) {
	$scope.equips = [];

	getData($http, 'equipments', function(result) {
		$scope.equips = result;
	});
};

function ProjectsCtrl($scope, $http) {
	$scope.projects = [];

	getData($http, 'projects', function(result) {
		$scope.projects = result;
	});
};

function LinksCtrl($scope, $http) {
	$scope.links = [];

	getData($http, 'links', function(result) {
		$scope.links = result;
	});
};

function PeopleCtrl($scope, $http, $routeParams) {
	$scope.people = [];

	getData($http, 'people', function(result) {
		$scope.people = result;

		if ($routeParams.personId) {
			$scope.person = getById($scope.people, $routeParams.personId);
		}
	});
};

function PhotoCtrl($scope, $routeParams) {
	$scope.photoUrl = $routeParams.photoUrl;
	$scope.title = $routeParams.title;
};

function getDateSorter(reverse) {
	return function(a, b) {
		a = new Date(a.date);
		b = new Date(b.date);
		if (!reverse)
			return a < b ? -1 : a > b ? 1 : 0;
		return a < b ? 1 : a > b ? -1 : 0;
	};
}

function getData(http, json_file, func) {
	http.get('data/' + json_file + '.json').success(func);
};

function getById(input, id) {
	var i = 0, len = input.length;
	for (; i < len; i++) {
		if (input[i].id == id) {
			return input[i];
		}
	}
	return null;
};

function urlExists(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	return http.status != 404;
};
