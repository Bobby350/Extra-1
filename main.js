var images = ["","https://www.google.com/url?sa=i&url=https%3A%2F%2Fdoors-game.fandom.com%2Fwiki%2FRush&psig=AOvVaw2NTCIAR1pt7_qbUsGhUYR1&ust=1673669269700000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDTk4TWw_wCFQAAAAAdAAAAABAE", "https://static.wikia.nocookie.net/doors-game/images/6/60/Ambush2.png/revision/latest?cb=20220916122448" , "https://static.wikia.nocookie.net/villains/images/d/db/Screech_Render.webp/revision/latest?cb=20220927200006", "https://static.wikia.nocookie.net/doors-game/images/4/4c/Timothy2.png/revision/latest?cb=20221221015736"];
           
var names = ["Doors Monsters","Rush", "Ambush", "Screech", "Kaitlyn Nguyen", "Hoa Nguyen"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}