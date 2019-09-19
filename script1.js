// This is call IIFE (Immediately Invoked Function Expression)
//(function(){
var printLog = function(){
    console.log("Welcome to my first page!");
}

var callFunction = function(f){
    console.log("This is how we can achieve Abstraction in AJS.");
    f();
}

callFunction(printLog);

// This is how we create modules
var fetchData = function(){
    var connectDB = function(){
        console.log("Connected to database...");
    }
    var fireQuery = function(){
        console.log("Query fired...");
    }
    var fetchResults = function(){
        console.log("Results fetched...");
    }
    var displayResults = function(){
        console.log("Results displayed...");
    }
    return{
        task1: connectDB,
        task2: fireQuery,
        task3: fetchResults,
        task4: displayResults
    }
}

var showResults = fetchData();
showResults.task1();
showResults.task2();
showResults.task3();
showResults.task4();
//IIFE scope ends here
//})();

var angularScope = angular.module("myApp", []);

angularScope.controller("showMessageController", function($scope) {
    $scope.message = "By: Gopal Adhikary";
    $scope.biodata ={
        Company: "Capgemini India Pvt. Ltd.",
        Designation: "Senior Software Analyst",
        Experience: "2 years"
    }
});

angularScope.controller("emojiController", function($scope, $http,$timeout) {
var currIndex=0;
function callAtTimeout(dataa){
$scope.currData=dataa;
if($scope.datalength>=currIndex)
{
$timeout(callAtTimeout, 3000,true,$scope.dataas[currIndex]);
currIndex++;
}
else
{
currIndex=0;
$timeout(callAtTimeout, 3000,true,$scope.dataas[currIndex]);
}
}

$scope.dataas=[];
    $http.get("https://api.github.com/emojis").then(
        function(response){
            for(var item in response.data){
                $scope.dataas.push(response.data[item]);  
            }
$scope.datalength=$scope.dataas.length;
callAtTimeout($scope.dataas[0]);
            //$scope.datas = response.data;
        },
        function(response){
            $scope.datas = "Error";
        }
    )
});
