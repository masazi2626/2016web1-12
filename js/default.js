document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').word.value);
  return false;
};

for(var i = 1; i < 101; i++)
{
  var li = document.createElement('li');
  li.textContent = i;
  
  if(i%15==0)
  {
    li.textContent = "FizzBuzz";
  }
  if(i%3==0)
  {
    li.textContent = "Fizz";
  }
  if(i%5==0)
  {
    li.textContent = "Buzz";    
  }
  
  li.textContent = i;
  document.getElementById('list').appendChild(li);
}
