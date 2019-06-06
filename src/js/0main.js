
import 'bootstrap';

jQuery(document).ready(function () {
    $('.carousel').carousel({
        pause: "false",
        interval: 7000
    });

    var ctx = $("#myChart");
    var ctx2 = $("#myChart2");

    // For a pie chart
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["HTML", "CSS", "Javascript"],
            datasets: [{
                label: "My First dataset",
                defaultFontColor: "rgba(255,4,132,1)",
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6628", "#78A2EB", "#AACE56"]
            }]

        },

        options: {
            // 
            ////Boolean - Whether we should show a stroke on each segment
            //	segmentShowStroke : true,
            //	
            //	//String - The colour of each segment stroke
            //	segmentStrokeColor : "#fff",
            //	
            //	//Number - The width of each segment stroke
            //	segmentStrokeWidth : 2,
            //	
            //	//The percentage of the chart that we cut out of the middle.
            //	percentageInnerCutout : 50,
            //	
            //	//Boolean - Whether we should animate the chart	

            //	
            //	//Number - Amount of animation steps
            //	animationSteps : 100,
            //	
            //	//String - Animation easing effect
            //	animationEasing : "easeOutBounce",
            //	
            //	//Boolean - Whether we animate the rotation of the Doughnut
            //	animateRotate : true,
            //
            //	//Boolean - Whether we animate scaling the Doughnut from the centre
            //	animateScale : false,
            //	
            //	//Function - Will fire on animation completion.
            //	onAnimationComplete : null,
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 255, 255)'
                }
            }
        }

    });

    var myPieChart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ["iOs", "Android", "winPhone"],
            datasets: [{
                label: "My Second dataset",
                defaultFontColor: "rgba(255,4,132,1)",
                data: [11, 10, 7],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6628", "#78A2EB", "#AACE56"]
            }]

        },

        options: {
            // 
            ////Boolean - Whether we should show a stroke on each segment
            //	segmentShowStroke : true,
            //	
            //	//String - The colour of each segment stroke
            //	segmentStrokeColor : "#fff",
            //	
            //	//Number - The width of each segment stroke
            //	segmentStrokeWidth : 2,
            //	
            //	//The percentage of the chart that we cut out of the middle.
            //	percentageInnerCutout : 50,
            //	
            //	//Boolean - Whether we should animate the chart	

            //	
            //	//Number - Amount of animation steps
            //	animationSteps : 100,
            //	
            //	//String - Animation easing effect
            //	animationEasing : "easeOutBounce",
            //	
            //	//Boolean - Whether we animate the rotation of the Doughnut
            //	animateRotate : true,
            //
            //	//Boolean - Whether we animate scaling the Doughnut from the centre
            //	animateScale : false,
            //	
            //	//Function - Will fire on animation completion.
            //	onAnimationComplete : null,
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 255, 255)'
                }
            }
        }

    });
});
//# sourceMappingURL=main.js.map
