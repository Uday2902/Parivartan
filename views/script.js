//..................AngularJs...................

const app = angular.module('myApp',[]);
app.controller('dataCtrl',function($scope){
    // THIS WE HAVE TO DO USING API OF NGOs LIST
    $scope.messageData = [
        {
            src:"img/f3.png",
            name:"lion mesi",
            description:"Hey this is lion mesi",
            active: "nac"
        },
        {
            src:"img/m1.jpg",
            name:"emaly wills",
            description:"Hey this is emaly wills",
            active: "nac"
        },
        {
            src:"img/m2.png",
            name:"dani liza",
            description:"Hey this is deni liza",
            active: "ac"
        },
        {
            src:"img/m3.jpg",
            name:"prince jhoo",
            description:"Hey this is prince jhoo",
            active: "nac"
        },
        {
            src:"img/m4.png",
            name:"daniel river",
            description:"Hey this is daniel river",
            active: "ac"
        },
    ]

    const data = JSON.parse(fs.readFileSync('../data.json'));
    $scope.feedData = data;

    $scope.feedData = [
        {
            profileSrc:"imgg/p7.png",
            name:"abc",
            feedSrc:"imgg/feed1.jpg"
        },
        {
            profileSrc:"imgg/p5.png",
            name:"pqr",
            feedSrc:"imgg/feed8.jpg"
        },
        {
            profileSrc:"imgg/feed4.jpg",
            name:"xyz",
            feedSrc:"imgg/feed4.jpg"
        },
        {
            profileSrc:"imgg/p2.jpg",
            name:"dfg",
            feedSrc:"imgg/feed3.png"
        },
        {
            profileSrc:"imgg/s1.jpg",
            name:"uio",
            feedSrc:"imgg/feed2.jpg"
        },
        {
            profileSrc:"imgg/profile-4.jpg",
            name:"rty",
            feedSrc:"imgg/feed6.png"
        },
        {
            profileSrc:"imgg/p3.png",
            name:"hdd",
            feedSrc:"imgg/feed7.jpg"
        },
        {
            profileSrc:"imgg/s7.jpg",
            name:"tyu",
            feedSrc:"imgg/feed5.jpg"
        },
    ]
});