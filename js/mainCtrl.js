angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = [
        'The Three Amigos', 'Squirtle', 'Squish Magoosh'];
    
    $scope.addFriend = function(name) {
        $scope.friends.push(name);
    };
});