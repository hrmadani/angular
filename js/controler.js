/**
 * Created with JetBrains PhpStorm.
 * User: HRMadani
 * Date: 8/5/14
 * Time: 7:21 PM
 * To change this template use File | Settings | File Templates.
 */
function HelloController($scope){
    $scope.greeting = {text:'Hello'};
}
function shop($scope){
    $scope.greeting = {text:'Test Shop'};
    $scope.items = [
        {title:'A',tedad:9,price:20000},
        {title:'B',tedad:4,price:50000},
        {title:'C',tedad:3,price:60000},
        {title:'D',tedad:1,price:80000}
    ]
}
