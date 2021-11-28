image_array = [
'dad.jpg',
'mom.jpg',
'sanjiv.jpg',
'daksh.jpg',
'everyone.jpg'
]

function nextImage()
{
  random_index = Math.floor(Math.random() * image_array.length);

  select_image = image_array[random_index]

  document.getElementById("family_member_image").src = `./Images/${select_image}`
}