// Quest1A
function changeImage1(){
    const img1 = document.getElementById("image1");
    const newImg1 = "https://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg";
    img1.src = newImg1;
    
}

function changeImage2(){
    const img2 = document.getElementById("image1");
    const newImg2 = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
    img2.src = newImg2;
}

function changeImage3(){
    const img3 = document.getElementById("image1");
    const newImg3 = "https://i0.wp.com/www.windycityparrot.com/wordpress/wp-content/uploads/cockatiel-3846264_640.jpg"
    img3.src = newImg3;
}

// Quest2

function printData(){
    let data1 = document.getElementsByClassName("data1");
    let data2 = document.getElementsByClassName("data2");
    console.log(data1[0].value);
    data2.value = data1.value;
    
    
}
