// OnScreen Detect
$(function() {
    var $appeared = $('.detect');
    $('.detect').appear();
    $(document.body).on('appear', '.detect', function(e, $affected) {
        // this code is executed for each appeared element
        $affected.each(function() {
            // Remove Class Detect
            $('.circle').removeClass('detect');
            // Circle 1
            $('.first.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.7,
                fill: {
                    gradient: ["#4f316a", "#4f316a", "#4f316a", "#4f316a"]
                    //color: ["#4f316a"]
                }
            });
            // Circle 2
            $('.second.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.97,
                fill: {
                    gradient: ["#4f316a", "#4f316a", "#4f316a", "#4f316a"]
                    //color: ["#4f316a"]
                }
            });
            // Circle 3
            $('.third.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 1,
                fill: {
                    gradient: ["#4f316a", "#c044a6", "#f85e29", "#f9e600"]
                }
            });
            // Circle 4
            $('.fourth.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.2,
                fill: {
                    gradient: ["#4f316a", "#4f316a", "#4f316a", "#4f316a"]
                    //color: ["#4f316a"]
                }
            });
            // Circle 5
            $('.fifth.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.7,
                fill: {
                    gradient: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"]
                    //color: ["#ffffff"]
                }
            });
            // Circle 6
            $('.sixth.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.90,
                fill: {
                    gradient: ["#6dcd8f", "#6dcd8f", "#6dcd8f", "#6dcd8f"]
                    //color: ["#6dcd8f"]
                }
            });
            // Circle 7
            $('.seventh.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.7,
                fill: {
                    gradient: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"]
                    //color: ["#ffffff"]
                }
            });
            // Circle 8
            $('.eight.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.97,
                fill: {
                    gradient: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"]
                    //color: ["#ffffff"]
                }
            });
            // Circle 9
            $('.nine.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 1,
                fill: {
                    gradient: ["#4f316a", "#c044a6", "#f85e29", "#f9e600"]
                }
            });
            // Circle 10
            $('.ten.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.2,
                fill: {
                    gradient: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"]
                    //color: ["#ffffff"]
                }
            });
            // Circle 11
            $('.eleven.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.7,
                fill: {
                    gradient: ["#fbc302", "#fbc302", "#fbc302", "#fbc302"]
                    //color: ["#fbc302"]
                }
            });
            // Circle 12
            $('.twelve.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.97,
                fill: {
                    gradient: ["#fbc302", "#fbc302", "#fbc302", "#fbc302"]
                    //color: ["#fbc302"]
                }
            });
            // Circle 13
            $('.thirteen.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 1,
                fill: {
                    gradient: ["#fbc302", "#c044a6", "#f85e29", "#f9e600"]
                }
            });
            // Circle 14
            $('.fourteen.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.2,
                fill: {
                    gradient: ["#fbc302", "#fbc302", "#fbc302", "#fbc302"]
                    //color: ["#fbc302"]
                }
            });
            // Ultra 1
            $('.ultra1.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.7,
                fill: {
                    gradient: ["#ff7777", "#ff7777", "#ff7777", "#ff7777"]
                    //color: ["#ff7777"]
                }
            });
            // Ultra 2
            $('.ultra2.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.97,
                fill: {
                    gradient: ["#ff7777", "#ff7777", "#ff7777", "#ff7777"]
                    //color: ["#ff7777"]
                }
            });
            // Ultra 3
            $('.ultra3.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 1,
                fill: {
                    gradient: ["#fbc302", "#ff7777", "#f85e29", "#f9e600"]
                }
            });
            // Ultra 4
            $('.ultra4.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.2,
                fill: {
                    gradient: ["#ff7777", "#ff7777", "#ff7777", "#ff7777"]
                    //color: ["#ff7777"]
                }
            });
            // Orange 1
            $('.orange1.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.7,
                fill: {
                    gradient: ["#d06721", "#d06721", "#d06721", "#d06721"]
                    //color: ["#d06721"]
                }
            });
            // Orange 2
            $('.orange2.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.97,
                fill: {
                    gradient: ["#d06721", "#d06721", "#d06721", "#d06721"]
                    //color: ["#d06721"]
                }
            });
            // Orange 3
            $('.orange3.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 1,
                fill: {
                    gradient: ["#fbc302", "#d06721", "#f85e29", "#f9e600"]
                }
            });
            // Orange 4
            $('.orange4.circle').circleProgress({
                thickness: 6,
                size: 255,
                value: 0.2,
                fill: {
                    gradient: ["#d06721", "#d06721", "#d06721", "#d06721"]
                    //color: ["#d06721"]
                }
            });
        })
    });
});