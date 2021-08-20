function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1NO3Z7FyW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

barking = 0;
meowing = 0;
trumpeting = 0;
roar = 0;

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255);
        random_number_g = Math.floor(Math.random() * 255);
        random_number_b = Math.floor(Math.random() * 255);

        document.getElementById("dog").innerHTML = 'Detected Dog -  '+barking;
        document.getElementById("cat").innerHTML = 'Detected Cat -  '+meowing;
        document.getElementById("lion").innerHTML = 'Detected Lion -  '+roar;
        document.getElementById("elephant").innerHTML = 'Detected Elephant -  '+trumpeting;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("dog").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("cat").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("lion").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("elephant").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_acuuracy").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById('image');

        if(results[0].label == "Barking") 
        {
            img.src = 'dog.gif';
            barking = barking + 1;
            document.getElementById("dog").innerHTML = barking;
        }

        else if(results[0].label == "Cat") 
        {
            img.src = 'meow.gif';
            meowing = meowing + 1;
            document.getElementById("cat").innerHTML = meowing;
        }

        else if(results[0].label == "Roar") 
        {
            img.src = 'lion.gif';
            roar = roar + 1;
            document.getElementById("lion").innerHTML = roar;
        }

        else if(results[0].label == "Trumpeting") 
        {
            img.src = 'elephant.gif';
            trumpeting = trumpeting + 1;
            document.getElementById("elephant").innerHTML = trumpeting;
        }

        else 
        {
            img.src = 'listen.gif';
        }
    }
}