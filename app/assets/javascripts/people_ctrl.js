(function() {
angular.module("app"). controller("peopleCtrl", function($scope) {
  $scope.people = [
  {name:"James", bio:"Mortician", bioVisible: false},
  {name:"Ricky", bio:"Uber driver", bioVisible: false},
  {name:"Sarah", bio:"Snake charmer", bioVisible: false},
  ];

  $scope.addPerson = function(inputName, inputBio) {
     var newPerson = {name: inputName, bio: inputBio, bioVisible: false};
     $scope.people.push(newPerson);
   };

   $scope.deletePerson = function(inputPerson) {
      var index = $scope.people.indexOf(inputPerson);
      if (index !== 1) {
        $scope.people.splice(index, 1);
      }

   };

   $scope.toggleBioVisible = function(inputPerson) {
      inputPerson.bioVisible = !inputPerson.bioVisible;
      console.log("toggleBioVisible", inputPerson);
      };

    window.$scope = $scope;

   });
})();