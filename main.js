let header_h1_old = document.querySelector('h1');
header_h1_old.id = 'h1_old';
header_h1_old.remove();

let header_h1 = document.createElement('h1');
header_h1.innerHTML = 'Lab7 Assignment';
header_h1.style.color = 'blue';
document.body.appendChild(header_h1);


let hr_one = document.createElement('hr');
document.body.appendChild(hr_one);

let header_h2_task = document.createElement('h2');
header_h2_task.innerHTML = 'Task';
header_h2_task.style.color = 'red';
document.body.appendChild(header_h2_task);

let div_one = document.createElement('div');
div_one.id = 'listdiv_one';
div_one.innerHTML = 'In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
document.body.appendChild(div_one);
let bullet_text_one = ["find elements in the DOM <strong>(5 points)</strong>;", "create/add/remove elements <strong>(5 points)</strong>;", "change content of the elements <strong>(5 points)</strong>;", "change styles of the elements <strong>(5 points)</strong>;", "change attributes of the elements <strong>(5 points)</strong>;", "change classes of the elements <strong>(5 points)</strong>."];
let ul_one = document.createElement('ul');
document.getElementById('listdiv_one').appendChild(ul_one);
bullet_text_one.forEach(function(bullet_point, point_index){
    let li = document.createElement('li');
    ul_one.appendChild(li);
    li.innerHTML += bullet_point;
    if(point_index % 2 === 0){
        li.style.color = 'green';
    } else {
        li.style.color = 'purple';
    }
});

let hr_two = document.createElement('hr');
document.body.appendChild(hr_two);

let header_h2_submission = document.createElement('h2');
header_h2_submission.innerHTML = 'Submission';
header_h2_submission.style.color = 'red';
document.body.appendChild(header_h2_submission);

let div_two = document.createElement('div');
div_two.id = 'listdiv_two';
div_two.innerHTML = 'To submit your work, follow these instructions:';
document.body.appendChild(div_two);
let bullet_text_two = ["Create a new repository on Github, named <strong>lab7 (1 point)</strong>.", "Clone this repository to your local machine and work inside it.", "Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message <strong>(1 point)</strong>.", "Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above <strong>(1 point)</strong>.", "Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).", "Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file <strong>(5 points)</strong>.", "After you finish your work, submit it to the Github <strong>(2 points)</strong>."];
let ul_two = document.createElement('ul');
document.getElementById('listdiv_two').appendChild(ul_two);
bullet_text_two.forEach(function(bullet_point, point_index){
    let li = document.createElement('li');
    ul_two.appendChild(li);
    li.innerHTML += bullet_point;
    if(point_index % 2 === 0){
        li.style.color = 'green';
    } else {
        li.style.color = 'purple';
    }
});

let hr_three = document.createElement('hr');
document.body.appendChild(hr_three);